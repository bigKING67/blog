/**
 * 文章分类预设（侧边栏 / 分类页 / 分类导航固定展示与排序）
 * 文章 frontmatter 的 category 请使用下列名称之一。
 */
export const POST_CATEGORIES = [
	"Talk is cheap", // 碎碎念、随笔、建站记录
	"That tastes good", // 产品、设计、审美与品味
	"Action speaks louder", // 动手实践、项目、教程
	"Way to AGI", // AI / 算法 / 学习路径
	"You gotta eat", // 吃喝、生活烟火
	"See the world", // 见闻、旅行、影视延伸
] as const;

export type PostCategory = (typeof POST_CATEGORIES)[number];
