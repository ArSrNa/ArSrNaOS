import { Space, Card, Button, Image, Avatar, Typography, Anchor, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';
import { GithubOutlined, GlobalOutlined } from '@ant-design/icons';
import './index.scss';
const { Meta } = Card;
const { Title, Paragraph } = Typography;


export default function Home() {
    const navigate = useNavigate();
    const nodejsRes = [{
        img: '/covers/nodejs/rgp.png',
        title: 'React 原神元素进度条',
        description: '使用React与svg，叠层的一个元素进度条',
        git: 'https://github.com/ArSrNa/React-GenshinProgress',
        sourceLink: 'https://www.npmjs.com/package/genshin-progress',
        demo: '/demo/nodejs/genshin-progress'
    }, {
        img: '/covers/nodejs/player.png',
        title: 'React 带歌词简易播放器',
        description: '实现标题副标题显示，封面展示，原生audio播放器，lrc歌词同步显示（需提前转换为json）',
        git: 'https://github.com/ArSrNa/React-LRCPlayer',
        sourceLink: 'https://www.npmjs.com/package/react-lrcplayer',
        demo: '/demo/nodejs/lrcplayer'
    }];

    const appRes = [{
        img: 'https://www.rehiy.com/usr/uploads/2023/10/2144835887.png',
        title: 'OpenTDP-云边拨测',
        description: '这是一个将自己的节点注册到 OpenTDP 云边拨测集群的服务。',
        actions: [
            <a onClick={() => navigate('/opentdp/blackbox/')} >节点状态</a>,
            <a href="https://blackbox.opentdp.org/provide_nodes" target='_blank'><GlobalOutlined /> 注册节点</a>,
            <a href="https://blackbox.opentdp.org/" target='_blank'><GlobalOutlined /> 了解更多</a>
        ]
    },]

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
                    <div className='card-container'>
                        {nodejsRes.map(res => {
                            const { img, title, description, git, sourceLink, demo } = res
                            return (
                                <Card
                                    style={{ width: '100%' }}
                                    cover={
                                        <img alt={title} src={img} className='card-hdpic' />
                                    }
                                    actions={[
                                        git ? <a href={git} target='_blank'><GithubOutlined /> 源代码</a> : undefined,
                                        sourceLink ? <a href={sourceLink} target='_blank'><GlobalOutlined /> npm资源</a> : undefined,
                                        demo ? <a onClick={() => navigate(demo)}><GlobalOutlined /> Demo</a> : undefined,
                                    ]}
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
                </div>


                <div id='app-resources'>
                    <Title level={2}>应用资源</Title>
                    <div className='card-container'>
                        {appRes.map(res => {
                            const { img, title, description, actions } = res
                            return (
                                <Card cover={<img alt={title} src={img} className='card-hdpic' />}
                                    actions={actions}
                                >
                                    <Meta title={title} description={description} /></Card>)
                        }
                        )}
                    </div>
                </div>
            </Space>
        </>
    )
}