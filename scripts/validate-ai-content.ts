import { readFile } from "node:fs/promises";
import { basename } from "node:path";
import { glob } from "glob";
import matter from "gray-matter";

type Relation = {
	source: string;
	relation: string;
	target: string;
};

type GraphNode = {
	id: string;
	label: string;
	kind: string;
};

const entityFiles = await glob("src/content/ai-entities/*.{md,mdx}");
const briefFiles = await glob("src/content/ai-briefs/*.{md,mdx}");

const entityIds = new Set(
	entityFiles.map((file) => basename(file).replace(/\.(md|mdx)$/u, "")),
);

const graphNodes = JSON.parse(
	await readFile("src/data/ai/nodes.json", "utf8"),
) as GraphNode[];
const graphNodeIds = new Set(graphNodes.map((node) => node.id));
const knownIds = new Set([...entityIds, ...graphNodeIds]);

const errors: string[] = [];

for (const file of briefFiles) {
	const parsed = matter(await readFile(file, "utf8"));
	const refs = [
		...(Array.isArray(parsed.data.entities) ? parsed.data.entities : []),
		...(Array.isArray(parsed.data.featured) ? parsed.data.featured : []),
	];
	for (const ref of refs) {
		if (!entityIds.has(String(ref))) {
			errors.push(`${file}: references missing entity "${String(ref)}"`);
		}
	}
}

for (const file of entityFiles) {
	const parsed = matter(await readFile(file, "utf8"));
	const sources = Array.isArray(parsed.data.sources) ? parsed.data.sources : [];
	const maturity = Number(parsed.data.maturity ?? 0);

	if (sources.length === 0) {
		errors.push(`${file}: must contain at least one primary/source reference`);
	}
	if (!Number.isFinite(maturity) || maturity <= 0) {
		errors.push(`${file}: maturity must be greater than 0 after source verification`);
	}

	const related = Array.isArray(parsed.data.related) ? parsed.data.related : [];
	for (const ref of related) {
		if (!knownIds.has(String(ref))) {
			errors.push(`${file}: related references unknown id "${String(ref)}"`);
		}
	}
}

const relations = JSON.parse(
	await readFile("src/data/ai/relations.json", "utf8"),
) as Relation[];

const seenEdges = new Set<string>();
for (const edge of relations) {
	const key = `${edge.source}::${edge.relation}::${edge.target}`;
	if (seenEdges.has(key)) {
		errors.push(`duplicate relation: ${key}`);
	}
	seenEdges.add(key);

	if (!knownIds.has(edge.source)) {
		errors.push(`relation source is unknown: "${edge.source}"`);
	}
	if (!knownIds.has(edge.target)) {
		errors.push(`relation target is unknown: "${edge.target}"`);
	}
}

if (errors.length > 0) {
	console.error("AI Radar validation failed:");
	for (const error of errors) console.error(`- ${error}`);
	process.exit(1);
}

console.log(
	`AI Radar OK: ${entityIds.size} entities, ${briefFiles.length} briefs, ${relations.length} relations, ${graphNodes.length} system nodes.`,
);
