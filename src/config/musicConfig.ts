import type { MusicPlayerConfig } from "../types/musicConfig";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	// 是否在导航栏显示音乐播放器入口
	showInNavbar: true,

	// 是否在侧边栏显示音乐播放器组件
	showInSidebar: true,

	// 使用方式："meting" 使用 Meting API，"local" 使用本地音乐列表
	mode: "local",

	// 默认音量 (0-1)
	volume: 0.7,

	// 播放模式：'list'=列表循环, 'one'=单曲循环, 'random'=随机播放
	playMode: "one",

	// 是否显启用歌词
	showLyrics: false,

	// Meting API 配置（备用；当前使用 local）
	meting: {
		api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
		server: "netease",
		type: "song",
		id: "22497474",
		auth: "",
		fallbackApis: [
			"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
		],
	},

	// 本地音乐：Radiohead - Let Down + OK Computer 封面
	local: {
		playlist: [
			{
				name: "Let Down",
				artist: "Radiohead",
				url: "/assets/music/Radiohead-Let-Down.mp3",
				cover: "/assets/music/cover/ok-computer.jpg",
				lrc: "",
			},
		],
	},
};
