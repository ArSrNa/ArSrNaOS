import { Space, Card, Button, Image, Avatar, Typography, Anchor, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';
import { BookOutlined, CloudOutlined, DownloadOutlined, GithubOutlined, GlobalOutlined } from '@ant-design/icons';
import './index.scss';
import { CNBLogo } from './components';
const { Meta } = Card;
const { Title, Paragraph } = Typography;


export default function Home() {
    const navigate = useNavigate();
    const nodejsRes = [{
        img: '/covers/nodejs/rgp.png',
        title: 'React 原神元素进度条',
        description: '使用React与svg，叠层的一个元素进度条',
        git: 'https://github.com/ArSrNa/React-GenshinProgress',
        cnb: "https://cnb.cool/arsrna/os/React-GenshinProgress",
        sourceLink: 'https://www.npmjs.com/package/genshin-progress',
        demo: '/demo/nodejs/genshin-progress'
    }, {
        img: '/covers/nodejs/react-av-timeline.png',
        title: 'React 音视频时间轴',
        description: 'react音视频时间轴',
        git: 'https://github.com/ArSrNa/react-timeline',
        cnb: "https://cnb.cool/arsrna/os/react-timeline",
        sourceLink: 'https://www.npmjs.com/package/react-av-timeline',
        demo: '/demo/nodejs/timeline'
    }, {
        img: '/covers/nodejs/VPDemo.png',
        title: 'React 可视化播放器',
        description: '一个可视化播放器demo（原神生日会《提瓦特民谣》）Timeline+Player',
        cnb: "https://cnb.cool/arsrna/visualize-music",
        demo: '/demo/nodejs/visualize-player'
    }, {
        img: '/covers/nodejs/player.png',
        title: 'React 带歌词简易播放器',
        description: '实现标题副标题显示，封面展示，原生audio播放器，lrc歌词同步显示（需提前转换为json）',
        git: 'https://github.com/ArSrNa/React-LRCPlayer',
        cnb: "https://cnb.cool/arsrna/os/React-LRCPlayer",
        sourceLink: 'https://www.npmjs.com/package/react-lrcplayer',
        demo: '/demo/nodejs/lrcplayer'
    }, {
        img: '/covers/nodejs/smpte.png',
        title: '时码器信号生成',
        description: '纯前端生成SMPTE时间码（LTC）',
        sourceLink: 'https://www.npmjs.com/package/smpte-generator',
        demo: 'https://smpte.arsrna.cn'
    }, {
        img: '/covers/nodejs/slider.png',
        title: 'React 渐变轮播图',
        description: 'react渐变图片轮播组件',
        git: 'https://github.com/ArSrNa/react-fade-slider',
        cnb: "https://cnb.cool/arsrna/os/react-fade-slider",
        sourceLink: 'https://www.npmjs.com/package/react-fade-slider',
        demo: '/demo/nodejs/slider'
    }, {
        img: '/covers/nodejs/cover_generator.png',
        title: 'React 简易封面生成',
        description: '模仿风格，纯前端效果封面生成',
        git: 'https://github.com/ArSrNa/cover-generator',
        cnb: "https://cnb.cool/arsrna/os/cover-generator",
        sourceLink: 'https://www.npmjs.com/package/poster-generator',
        demo: '/demo/nodejs/cover'
    }];

    const appRes = [{
        img: '/covers/appres/app-esrgan.png',
        title: 'ESRGAN超分辨率',
        description: '基于增强型超分辨率生成对抗网络开发，可实现图像与视频线条连续地提升分辨率',
        actions: [
            <CNBLogo link="https://cnb.cool/arsrna/esrgan-app">源代码</CNBLogo>,
            <a href='https://www.arsrna.cn/app/esrgan' target='_blank'>
                <DownloadOutlined /> 产品下载</a>,
            <a href='https://cloud.tencent.com/developer/article/2011313' target='_blank'>
                <BookOutlined /> 服务器部署</a>,
        ]
    }, {
        img: '/covers/appres/cnb-next-eo.png',
        title: 'CNB+Next+EO',
        description: 'Nextjs项目+CNB构建+EOPages自动化部署',
        actions: [
            <CNBLogo link="https://cnb.cool/arsrna/next-cnb-eo-demo">源代码/文档</CNBLogo>,
            <a href='https://cloud.tencent.com/developer/article/2533707' target='_blank'>
                <BookOutlined /> 教程</a>,
            <a href='https://eo.cnbnb.cn/' target='_blank'>
                <GlobalOutlined /> Demo</a>
        ]
    }, {
        img: '/covers/appres/cnb-latex.png',
        title: 'CNB LaTeX编辑器',
        description: '在CNB上使用code-server+LaTeX写论文',
        actions: [
            <CNBLogo link="https://cnb.cool/arsrna/cnb-latex">源代码/文档</CNBLogo>,
            <a href='https://cloud.tencent.com/developer/article/2535825' target='_blank'>
                <BookOutlined /> 构建教程</a>
        ]
    }, {
        img: '/covers/appres/cnb-blender.png',
        title: '云原生Blender渲染',
        description: '在CNB云原生开发环境使用Blender',
        actions: [
            <CNBLogo link="https://cnb.cool/arsrna/blender-docker">源代码和文档</CNBLogo>,
            <a href='https://cloud.tencent.com/developer/article/2496407' target='_blank'>
                <BookOutlined /> 教程</a>
        ]
    }, {
        img: '/covers/appres/cnb-comfyui.png',
        title: '云原生ComfyUI',
        description: '在CNB云原生开发环境使用ComfyUI',
        actions: [
            <CNBLogo link="https://cnb.cool/arsrna/comfyui-cnb">源代码/文档</CNBLogo>
        ]
    }]

    return (
        <>
            <Space direction='vertical' style={{ width: '100%' }} size="large">
                <div>
                    <div style={{ zIndex: 1, position: 'absolute', padding: 50, color: 'white' }}>
                        <div className='title' style={{ letterSpacing: 3 }}>ArSrNa 资源与应用</div>
                        <span className='lead'>开源资源中心</span>
                    </div>
                    <img src='./images/index.jpg' className='hdpic' />
                </div>

                <Anchor
                    direction="horizontal"
                    items={[{
                        key: 'nodejs资源',
                        href: '#nodejs-resources',
                        title: 'nodejs资源',
                    }, {
                        key: '应用资源',
                        href: '#app-resources',
                        title: '应用资源',
                    },]}
                />


                <div id='nodejs-resources'>
                    <Title level={2}>nodejs资源</Title>
                    {/*  <img src='https://res.arsrna.cn/images/cnb/griseo.png' style={{ maxWidth: '100%', cursor: 'pointer' }}
                        onClick={() => window.open('https://cnb.cool/arsrna/', '_blank')} /> */}
                    <div className='card-container'>
                        {nodejsRes.map(res => {
                            const { img, title, description, git, sourceLink, demo, cnb } = res
                            return (
                                <Card
                                    key={title}
                                    style={{ width: '100%' }}
                                    cover={
                                        <img alt={title} src={img} className='card-hdpic' />
                                    }
                                    actions={[
                                        git ? <a href={git} target='_blank' key={`${title}-github`}><GithubOutlined /> Github</a> : undefined,
                                        cnb ? <CNBLogo link={cnb} key={`${title}-cnb`}>CNB</CNBLogo> : undefined,
                                        sourceLink ? <a href={sourceLink} target='_blank' key={`${title}-npm`}><GlobalOutlined /> npm</a> : undefined,
                                        demo ? <a onClick={() => window.open(demo, '_blank')} key={`${title}-demo`}><GlobalOutlined /> Demo</a> : undefined,
                                    ].filter(f => f !== void '我永远喜欢爱莉希雅')}
                                >
                                    <Meta
                                        title={title}
                                        description={description}
                                    />
                                </Card>
                            )
                        }
                        )}
                    </div>
                </div >


                <div id='app-resources'>
                    <Title level={2}>应用资源</Title>
                    <div className='card-container'>
                        {appRes.map(res => {
                            const { img, title, description, actions } = res
                            return (
                                <Card key={title} cover={<img alt={title} src={img} className='card-hdpic' />}
                                    actions={actions}
                                >
                                    <Meta title={title} description={description} /></Card>)
                        }
                        )}
                    </div>
                </div>
            </Space >
        </>
    )
}