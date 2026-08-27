import * as path from "node:path";
import type { ImageMetadata } from "astro";
import { profileConfig } from "@/config/profileConfig";
import { siteConfig } from "@/config/siteConfig";
import { url } from "./url-utils";

const projectImages = import.meta.glob<ImageMetadata>(
	"/src/**/*.{png,jpg,jpeg,webp,avif,gif,svg}",
	{ import: "default" },
);

async function loadLocalImage(
	src: string,
	basePath: string,
): Promise<ImageMetadata | null> {
	const relativePath = src.replace(/^\.\//, "");
	const fullPath = path
		.normalize(path.join(basePath || "", relativePath))
		.replace(/\\/g, "/");
	const loader = projectImages[`/src/${fullPath}`];

	if (!loader) {
		console.warn(
			`[schema-image] Image not found: /src/${fullPath} (src="${src}", basePath="${basePath}")`,
		);
		return null;
	}

	return loader();
}

export async function toAbsoluteImageInfo(
	src: string | undefined | null,
	basePath: string,
	base: URL | string,
): Promise<{ url: string; width?: number; height?: number } | null> {
	if (!src) return null;

	if (src.startsWith("http://") || src.startsWith("https://")) {
		return { url: src };
	}
	if (src.startsWith("//")) {
		return { url: new URL(src, base).toString() };
	}
	if (src.startsWith("data:")) {
		return { url: src };
	}
	if (src.startsWith("/")) {
		return { url: new URL(url(src), base).toString() };
	}

	const image = await loadLocalImage(src, basePath);
	if (!image) return null;

	return {
		url: new URL(url(image.src), base).toString(),
		width: image.width,
		height: image.height,
	};
}

export async function toAbsoluteImageUrl(
	src: string | undefined | null,
	basePath: string,
	base: URL | string,
): Promise<string | null> {
	return (await toAbsoluteImageInfo(src, basePath, base))?.url ?? null;
}

export function getAuthorAvatarUrl(): Promise<string | null> {
	return toAbsoluteImageUrl(profileConfig.avatar, "", siteConfig.site_url);
}
