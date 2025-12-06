import { CNBIcon, CNBLogo } from "@/src/components"
import { BookIcon, DownloadIcon, Link2Icon } from "lucide-react"

export interface CardInfo {
    img: string
    title: string
    description: string
    info?: Partial<{
        lang: string;
        framework: string;
    }>
    link: Partial<{
        git: string
        cnb: string
        sourceLink: string
        demo: string;
        preview: string
    }>
}

export const nodejsRes: CardInfo[] = [{
    img: '/covers/nodejs/tencent-stock-api.png',
    title: '腾讯财经API',
    description: '腾讯财经api。仅作为实验和学习研究用途，非投资建议。',
    info: {
        lang: 'TypeScript',
        framework: 'bun'
    },
    link: {
        git: 'https://github.com/ArSrNa/tencent-stock-api',
        cnb: "https://cnb.cool/arsrna/os/tencent-stock-api",
        sourceLink: 'https://www.npmjs.com/package/tencent-stock-api',
        // demo: '/docs/react-av-timeline',
        preview: '/demo/tencent-stock-api'
    }
}, {
    img: '/covers/nodejs/react-av-timeline.png',
    title: 'React 音视频时间轴',
    description: 'react音视频时间轴',
    info: {
        lang: 'TypeScript',
        framework: 'React Vite'
    },
    link: {
        git: 'https://github.com/ArSrNa/react-timeline',
        cnb: "https://cnb.cool/arsrna/os/react-timeline",
        sourceLink: 'https://www.npmjs.com/package/react-av-timeline',
        demo: '/docs/react-av-timeline',
    }
}, {
    img: '/covers/nodejs/VPDemo.png',
    title: 'React 可视化播放器',
    info: {
        lang: 'TypeScript',
        framework: 'React Vite'
    },
    description: '一个可视化播放器demo（原神生日会《提瓦特民谣》）Timeline+Player',
    link: {
        cnb: "https://cnb.cool/arsrna/visualize-music",
        preview: '/demo/visualize-player'
    }
}, {
    img: '/covers/nodejs/player.png',
    title: 'React 带歌词简易播放器',
    info: {
        lang: 'TypeScript',
        framework: 'React Vite'
    },
    description: '实现标题副标题显示，封面展示，原生audio播放器，lrc歌词同步显示（需提前转换为json）',
    link: {
        git: 'https://github.com/ArSrNa/React-LRCPlayer',
        cnb: "https://cnb.cool/arsrna/os/React-LRCPlayer",
        sourceLink: 'https://www.npmjs.com/package/react-lrcplayer',
        demo: '/docs/react-lrcplayer'
    }
}, {
    img: '/covers/nodejs/rgp.png',
    title: 'React 原神元素进度条',
    info: {
        lang: 'TypeScript',
        framework: 'React TSC'
    },
    description: '使用React与svg，叠层的一个元素进度条',
    link: {
        git: 'https://github.com/ArSrNa/React-GenshinProgress',
        cnb: "https://cnb.cool/arsrna/os/React-GenshinProgress",
        sourceLink: 'https://www.npmjs.com/package/genshin-progress',
        demo: '/docs/genshin-progress'
    }
}, {
    img: '/covers/nodejs/smpte.png',
    title: '时码器信号生成',
    info: {
        lang: 'TypeScript',
        framework: 'Vue TSC'
    },
    description: '纯前端生成SMPTE时间码（LTC）',
    link: {
        sourceLink: 'https://www.npmjs.com/package/smpte-generator',
        preview: 'https://smpte.arsrna.cn'
    }
}, {
    img: '/covers/nodejs/slider.png',
    title: 'React 渐变轮播图',
    info: {
        lang: 'TypeScript',
        framework: 'React Vite'
    },
    description: 'react渐变图片轮播组件',
    link: {
        git: 'https://github.com/ArSrNa/react-fade-slider',
        cnb: "https://cnb.cool/arsrna/os/react-fade-slider",
        sourceLink: 'https://www.npmjs.com/package/react-fade-slider',
        demo: '/story/react-fade-slider--默认'
    }
}, {
    img: '/covers/nodejs/cover_generator.png',
    title: 'React 简易封面生成',
    info: {
        lang: 'TypeScript',
        framework: 'React Vite'
    },
    description: '模仿风格，纯前端效果封面生成',
    link: {
        git: 'https://github.com/ArSrNa/cover-generator',
        cnb: "https://cnb.cool/arsrna/os/cover-generator",
        sourceLink: 'https://www.npmjs.com/package/poster-generator',
        demo: '/docs/poster-generator'
    }
}];


export const appRes = [{
    img: '/covers/appres/app-esrgan.png',
    title: 'ESRGAN超分辨率',
    description: '基于增强型超分辨率生成对抗网络开发，可实现图像与视频线条连续地提升分辨率',
    actions: [{
        link: "https://cnb.cool/arsrna/esrgan-app",
        icon: <CNBIcon />,
        title: "源代码"
    }, {
        link: "https://www.arsrna.cn/app/esrgan",
        icon: <DownloadIcon size={18} />,
        title: "产品下载"
    }, {
        link: "https://cloud.tencent.com/developer/article/2011313",
        icon: <BookIcon size={18} />,
        title: "服务器部署"
    }
    ]
}, {
    img: '/covers/appres/cnb-next-eo.png',
    title: 'CNB+Next+EO',
    description: 'Nextjs项目+CNB构建+EOPages自动化部署',
    actions: [{
        link: "https://cnb.cool/arsrna/next-cnb-eo-demo",
        icon: <CNBIcon />,
        title: "源代码"
    }, {
        link: "https://eo.cnbnb.cn/",
        icon: <Link2Icon size={18} />,
        title: "Demo"
    }, {
        link: "https://cloud.tencent.com/developer/article/2533707",
        icon: <BookIcon size={18} />,
        title: "教程"
    }]
}, {
    img: '/covers/appres/cnb-latex.png',
    title: 'CNB LaTeX编辑器',
    description: '在CNB上使用code-server+LaTeX写论文',
    actions: [{
        link: "https://cnb.cool/arsrna/cnb-latex",
        icon: <CNBIcon />,
        title: "源代码"
    }, {
        link: "https://cloud.tencent.com/developer/article/2535825",
        icon: <BookIcon size={18} />,
        title: "构建教程"
    }]
}, {
    img: '/covers/appres/cnb-blender.png',
    title: '云原生Blender渲染',
    description: '在CNB云原生开发环境使用Blender',
    actions: [{
        link: "https://cnb.cool/arsrna/blender-docker",
        icon: <CNBIcon />,
        title: "源代码"
    }, {
        link: "https://cloud.tencent.com/developer/article/2496407",
        icon: <BookIcon size={18} />,
        title: "教程"
    }]
}, {
    img: '/covers/appres/cnb-comfyui.png',
    title: '云原生ComfyUI',
    description: '在CNB云原生开发环境使用ComfyUI',
    actions: [{
        link: "https://cnb.cool/arsrna/comfyui-cnb",
        icon: <CNBIcon />,
        title: "源代码 / 文档"
    }]
}];
