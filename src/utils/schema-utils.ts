import type { ProfileConfig, SiteConfig } from "@/types/config";
import { url } from "./url-utils";

export function toAbsoluteUrl(
	src: string | undefined | null,
	base: URL | string,
): string | null {
	if (!src) return null;
	if (src.startsWith("http://") || src.startsWith("https://")) return src;
	if (src.startsWith("//")) return new URL(src, base).toString();
	if (src.startsWith("data:")) return src;
	if (!src.startsWith("/")) return null;

	return new URL(url(src), base).toString();
}

function resolveSiteRoot(site: URL | string): string {
	return new URL(url("/"), site).toString();
}

function getIdentityLinks(links: ProfileConfig["links"]): string[] {
	return links
		.map((link) => link.url)
		.filter((link) => /^https?:\/\//.test(link));
}

export type PersonEntityOptions = {
	site: URL | string;
	profileConfig: ProfileConfig;
	authorUrl: string;
	avatarUrl?: string | null;
	description?: string;
};

export function buildPersonEntity(
	options: PersonEntityOptions,
): Record<string, unknown> {
	const siteRoot = resolveSiteRoot(options.site);
	const sameAs = getIdentityLinks(options.profileConfig.links);

	return {
		"@type": "Person",
		"@id": `${siteRoot}#person`,
		name: options.profileConfig.name,
		url: options.authorUrl,
		...(options.avatarUrl ? { image: options.avatarUrl } : {}),
		...(options.description ? { description: options.description } : {}),
		...(sameAs.length > 0 ? { sameAs } : {}),
	};
}

export function buildProfilePage(
	options: PersonEntityOptions,
): Record<string, unknown> {
	return {
		"@context": "https://schema.org",
		"@type": "ProfilePage",
		mainEntity: buildPersonEntity(options),
	};
}

export function buildSiteGraph(options: {
	site: URL | string;
	siteConfig: SiteConfig;
	profileConfig: ProfileConfig;
	lang: string;
	authorUrl: string;
	avatarUrl?: string | null;
}): Record<string, unknown> {
	const siteRoot = resolveSiteRoot(options.site);
	const person = buildPersonEntity({
		site: siteRoot,
		profileConfig: options.profileConfig,
		authorUrl: options.authorUrl,
		avatarUrl: options.avatarUrl,
		description: options.profileConfig.bio,
	});

	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebSite",
				"@id": `${siteRoot}#website`,
				url: siteRoot,
				name: options.siteConfig.title,
				description: options.siteConfig.description,
				inLanguage: options.lang,
				publisher: { "@id": person["@id"] },
			},
			person,
		],
	};
}

export function buildBreadcrumbList(
	items: Array<{ name: string; url: string }>,
): Record<string, unknown> {
	return {
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			item: item.url,
		})),
	};
}
