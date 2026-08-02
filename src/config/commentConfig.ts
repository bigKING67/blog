import type { CommentConfig } from "../types/commentConfig";

export const commentConfig: CommentConfig = {
	// 评论系统类型: none, twikoo, waline, giscus, disqus, artalk
	// 使用 Waline：支持匿名访客留言（昵称+邮箱即可），无需 GitHub 登录
	// 部署后把下方 serverURL 换成你自己的 Waline 服务地址
	type: "waline",

	//twikoo评论系统配置
	twikoo: {
		envId: "https://twikoo.vercel.app",
		// 设置 Twikoo 评论系统语言
		lang: "zh-CN",
		// 是否启用文章访问量统计功能
		visitorCount: true,
		// Twikoo JS 文件地址，支持 CDN 链接
		// 中国推荐1: https://registry.npmmirror.com/twikoo/1.7.14/files/dist/twikoo.min.js
		// 中国推荐2: https://s4.zstatic.net/npm/twikoo@1.7.14/dist/twikoo.min.js
		// 国际推荐: https://cdn.jsdelivr.net/npm/twikoo@1.7.14/dist/twikoo.min.js
		jsUrl: "https://cdn.jsdelivr.net/npm/twikoo@1.7.14/dist/twikoo.min.js",
		// Twikoo 自定义 CSS 文件地址，为空则不加载
		cssUrl: "/assets/css/twikoo-custom.css",
	},

	//waline评论系统配置（匿名留言）
	// 文档：https://waline.js.org/guide/get-started.html
	// serverURL 优先读环境变量 WALINE_SERVER_URL（见 Waline.astro）
	waline: {
		serverURL: "",
		lang: "zh-CN",
		emoji: [
			"https://unpkg.com/@waline/emojis@1.4.0/weibo",
			"https://unpkg.com/@waline/emojis@1.4.0/bilibili",
			"https://unpkg.com/@waline/emojis@1.4.0/bmoji",
		],
		// disable = 仅匿名（昵称/邮箱），不强制 OAuth 登录
		login: "disable",
		visitorCount: true,
	},

	// artalk评论系统配置
	artalk: {
		// artalk后端程序 API 地址
		server: "https://artalk.example.com/",
		// 设置 Artalk 语言
		locale: "zh-CN",
		// 是否启用文章访问量统计功能
		visitorCount: true,
	},

	//giscus评论系统配置（仓库已开启 Discussions）
	giscus: {
		repo: "bigKING67/blog",
		// GraphQL repository.id
		repoId: "R_kgDOSTGVHQ",
		// Discussions 分类名（需与仓库中一致）
		category: "General",
		// General 分类 id
		categoryId: "DIC_kwDOSTGVHc4DCfZj",
		// 按页面路径映射讨论，适合博客文章/留言板
		mapping: "pathname",
		strict: "0",
		reactionsEnabled: "1",
		emitMetadata: "0",
		inputPosition: "top",
		lang: "zh-CN",
		loading: "lazy",
	},

	//disqus评论系统配置
	disqus: {
		// 获取 Disqus 评论系统
		shortname: "firefly",
	},
};
