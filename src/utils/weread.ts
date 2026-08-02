/**
 * 微信读书 Agent Gateway 客户端（仅服务端 / 构建时使用）
 * 文档：https://github.com/Tencent/WeChatReading
 *
 * 密钥：环境变量 WEREAD_API_KEY（勿写入前端配置或提交 git）
 */

export const WEREAD_GATEWAY = "https://i.weread.qq.com/api/agent/gateway";
export const WEREAD_SKILL_VERSION = "1.0.4";

export type WereadBook = {
	bookId: string;
	title: string;
	author: string;
	cover: string;
	category: string;
	finishReading: boolean;
	secret: boolean;
	readUpdateTime: number;
	deepLink: string;
};

export type WereadStatItem = {
	stat: string;
	counts: string;
};

export type WereadReadingData = {
	configured: boolean;
	error?: string;
	books: WereadBook[];
	finished: WereadBook[];
	reading: WereadBook[];
	stats: WereadStatItem[];
	totalReadTimeSec: number;
	readDays: number;
	preferCategoryWord: string;
};

function getApiKey(): string {
	return (
		(typeof import.meta !== "undefined" &&
			(import.meta as ImportMeta & { env?: Record<string, string> }).env
				?.WEREAD_API_KEY) ||
		process.env.WEREAD_API_KEY ||
		""
	);
}

async function wereadRequest(
	apiName: string,
	params: Record<string, unknown> = {},
): Promise<Record<string, unknown>> {
	const apiKey = getApiKey();
	if (!apiKey) {
		throw new Error("WEREAD_API_KEY is not set");
	}

	const res = await fetch(WEREAD_GATEWAY, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${apiKey}`,
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify({
			api_name: apiName,
			skill_version: WEREAD_SKILL_VERSION,
			...params,
		}),
	});

	if (!res.ok) {
		throw new Error(`WeRead gateway HTTP ${res.status}`);
	}

	const data = (await res.json()) as Record<string, unknown>;
	const errcode = data.errcode ?? data.errCode;
	if (errcode !== undefined && errcode !== null && Number(errcode) !== 0) {
		const msg =
			(data.errmsg as string) ||
			(data.errMsg as string) ||
			(data.message as string) ||
			`errcode ${errcode}`;
		throw new Error(msg);
	}
	return data;
}

function mapBook(raw: Record<string, unknown>): WereadBook {
	return {
		bookId: String(raw.bookId ?? ""),
		title: String(raw.title ?? "未命名"),
		author: String(raw.author ?? ""),
		cover: String(raw.cover ?? ""),
		category: String(raw.category ?? ""),
		finishReading: Number(raw.finishReading) === 1,
		secret: Number(raw.secret) === 1,
		readUpdateTime: Number(raw.readUpdateTime ?? raw.updateTime ?? 0),
		deepLink: String(raw.deepLink ?? ""),
	};
}

/** 总秒数 → 可读时长 */
export function formatReadDuration(totalSec: number): string {
	if (!totalSec || totalSec <= 0) return "0 分钟";
	const hours = Math.floor(totalSec / 3600);
	const minutes = Math.floor((totalSec % 3600) / 60);
	if (hours <= 0) return `${minutes} 分钟`;
	if (minutes <= 0) return `${hours} 小时`;
	return `${hours} 小时 ${minutes} 分钟`;
}

/** 拉取公开书架 + 总体阅读统计（默认过滤私密书、不含有声书） */
export async function fetchWereadReadingData(): Promise<WereadReadingData> {
	const empty: WereadReadingData = {
		configured: false,
		books: [],
		finished: [],
		reading: [],
		stats: [],
		totalReadTimeSec: 0,
		readDays: 0,
		preferCategoryWord: "",
	};

	const apiKey = getApiKey();
	if (!apiKey) {
		return { ...empty, error: "未配置 WEREAD_API_KEY" };
	}

	try {
		const [shelf, readdata] = await Promise.all([
			wereadRequest("/shelf/sync"),
			wereadRequest("/readdata/detail", { mode: "overall" }),
		]);

		const rawBooks = Array.isArray(shelf.books)
			? (shelf.books as Record<string, unknown>[])
			: [];

		// 一期：只展示公开电子书，过滤私密；不展示 albums 有声书
		const books = rawBooks
			.map(mapBook)
			.filter((b) => b.bookId && !b.secret)
			.sort((a, b) => b.readUpdateTime - a.readUpdateTime);

		const finished = books.filter((b) => b.finishReading);
		const reading = books.filter((b) => !b.finishReading);

		const stats = Array.isArray(readdata.readStat)
			? (readdata.readStat as WereadStatItem[]).map((s) => ({
					stat: String(s.stat ?? ""),
					counts: String(s.counts ?? ""),
				}))
			: [];

		return {
			configured: true,
			books,
			finished,
			reading,
			stats,
			totalReadTimeSec: Number(readdata.totalReadTime ?? 0),
			readDays: Number(readdata.readDays ?? 0),
			preferCategoryWord: String(readdata.preferCategoryWord ?? ""),
		};
	} catch (e) {
		const message = e instanceof Error ? e.message : String(e);
		console.error("[WeRead]", message);
		return { ...empty, configured: true, error: message };
	}
}
