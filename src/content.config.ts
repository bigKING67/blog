import { defineCollection } from "astro:content";
import type { CollectionConfig } from "astro/content/config";
import { glob } from "astro/loaders";
import { type ZodType, z } from "astro/zod";

type PostData = {
	title: string;
	published: Date;
	updated?: Date;
	draft: boolean;
	description: string;
	image: string;
	tags: string[];
	category: string | null;
	lang: string;
	pinned: boolean;
	author: string;
	sourceLink: string;
	licenseName: string;
	licenseUrl: string;
	comment: boolean;
	password: string;
	passwordHint: string;
	prevTitle: string;
	prevSlug: string;
	nextTitle: string;
	nextSlug: string;
};

type DynamicData = {
	published: Date;
	pinned: boolean;
	location: string;
};

type AiEntityData = {
	name: string;
	kind:
		| "model"
		| "project"
		| "paper"
		| "company"
		| "product"
		| "framework"
		| "protocol"
		| "tool"
		| "research";
	summary: string;
	firstSeen: Date;
	updated: Date;
	status:
		| "discovered"
		| "watch"
		| "research"
		| "test"
		| "adopt"
		| "reject"
		| "archived";
	tags: string[];
	officialUrl: string;
	githubUrl: string;
	paperUrl: string;
	relevancePi67: number;
	relevanceAios: number;
	maturity: number;
	related: string[];
	sources: {
		title: string;
		url: string;
		published?: string;
	}[];
};

type AiBriefData = {
	date: Date;
	title: string;
	summary: string;
	entities: string[];
	featured: string[];
	tags: string[];
};

type ContentCollection<T> = CollectionConfig<
	ZodType<T>,
	ReturnType<typeof glob>
>;

const postsCollection: ContentCollection<PostData> = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
	schema: z.object({
		title: z.string(),
		published: z.date(),
		updated: z.date().optional(),
		draft: z.boolean().optional().default(false),
		description: z.string().optional().default(""),
		image: z.string().optional().default(""),
		tags: z.array(z.string()).optional().default([]),
		category: z.string().optional().nullable().default(""),
		lang: z.string().optional().default(""),
		pinned: z.boolean().optional().default(false),
		author: z.string().optional().default(""),
		sourceLink: z.string().optional().default(""),
		licenseName: z.string().optional().default(""),
		licenseUrl: z.string().optional().default(""),
		comment: z.boolean().optional().default(true),
		password: z.string().optional().default(""),
		passwordHint: z.string().optional().default(""),

		/* For internal use */
		prevTitle: z.string().default(""),
		prevSlug: z.string().default(""),
		nextTitle: z.string().default(""),
		nextSlug: z.string().default(""),
	}),
});

const specCollection: ContentCollection<Record<string, never>> =
	defineCollection({
		loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/spec" }),
		schema: z.object({}),
	});

const dynamicCollection: ContentCollection<DynamicData> = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/dynamic" }),
	schema: z.object({
		published: z.date(),
		pinned: z.boolean().optional().default(false),
		location: z.string().optional().default(""),
	}),
});

const aiEntitiesCollection: ContentCollection<AiEntityData> = defineCollection({
	loader: glob({
		pattern: "**/*.{md,mdx}",
		base: "./src/content/ai-entities",
	}),
	schema: z.object({
		name: z.string(),
		kind: z.enum([
			"model",
			"project",
			"paper",
			"company",
			"product",
			"framework",
			"protocol",
			"tool",
			"research",
		]),
		summary: z.string().optional().default(""),
		firstSeen: z.date(),
		updated: z.date(),
		status: z.enum([
			"discovered",
			"watch",
			"research",
			"test",
			"adopt",
			"reject",
			"archived",
		]),
		tags: z.array(z.string()).optional().default([]),
		officialUrl: z.string().optional().default(""),
		githubUrl: z.string().optional().default(""),
		paperUrl: z.string().optional().default(""),
		relevancePi67: z.number().min(0).max(100).default(0),
		relevanceAios: z.number().min(0).max(100).default(0),
		maturity: z.number().min(0).max(100).default(0),
		related: z.array(z.string()).optional().default([]),
		sources: z
			.array(
				z.object({
					title: z.string(),
					url: z.string(),
					published: z.string().optional(),
				}),
			)
			.optional()
			.default([]),
	}),
});

const aiBriefsCollection: ContentCollection<AiBriefData> = defineCollection({
	loader: glob({
		pattern: "**/*.{md,mdx}",
		base: "./src/content/ai-briefs",
	}),
	schema: z.object({
		date: z.date(),
		title: z.string(),
		summary: z.string().optional().default(""),
		entities: z.array(z.string()).optional().default([]),
		featured: z.array(z.string()).optional().default([]),
		tags: z.array(z.string()).optional().default([]),
	}),
});

export const collections: {
	dynamic: typeof dynamicCollection;
	posts: typeof postsCollection;
	spec: typeof specCollection;
	aiEntities: typeof aiEntitiesCollection;
	aiBriefs: typeof aiBriefsCollection;
} = {
	dynamic: dynamicCollection,
	posts: postsCollection,
	spec: specCollection,
	aiEntities: aiEntitiesCollection,
	aiBriefs: aiBriefsCollection,
};
