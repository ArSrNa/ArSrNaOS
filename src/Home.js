import { Space, Card, Button, Image, Avatar, Typography, Anchor, Row, Col } from 'antd';
import { GithubOutlined, GlobalOutlined } from '@ant-design/icons';
const { Meta } = Card;
const { Title, Paragraph } = Typography;


export default function Home() {
    const nodejsRes = [{
        img: require('./covers/nodejs/rgp.png'),
        title: 'React 原神元素进度条',
        description: '使用React与svg，叠层的一个元素进度条',
        git: 'https://github.com/ArSrNa/React-GenshinProgress',
        sourceLink: 'https://www.npmjs.com/package/genshin-progress',
        demo: '/demo/nodejs/genshin-progress'
    }, {
        img: require('./covers/nodejs/player.png'),
        title: 'React 带歌词简易播放器',
        description: '实现标题副标题显示，封面展示，原生audio播放器，lrc歌词同步显示（需提前转换为json）',
        git: 'https://github.com/ArSrNa/React-LRCPlayer',
        sourceLink: 'https://www.npmjs.com/package/react-lrcplayer',
        demo: '/demo/nodejs/lrcplayer'
    }]

    return (
        <>
            <Space direction='vertical' style={{ width: '100%' }} size="large">
                <div>
                    <div style={{ zIndex: 1, position: 'absolute', padding: 50, color: 'white' }}>
                        <div className='title' style={{ letterSpacing: 3 }}>ArSrNa 资源与应用</div>
                        <span className='lead'>开源资源中心</span>
                    </div>
                    <img src={require('./images/index.jpg')} className='hdpic' />
                </div>

                <section>
                    <div className='anchor'>
                        <Anchor
                            direction="horizontal"
                            items={[{
                                key: 'nodejs资源',
                                href: '#nodejs',
                                title: 'nodejs资源',
                            }, {
                                key: '应用资源',
                                href: '#Apps',
                                title: '应用资源',
                            },]}
                        />
                    </div>

                    <div id='nodejs'>
                        <Title level={2}>nodejs资源</Title>
                        <Row gutter={16}>

                            {nodejsRes.map(res => {
                                const { img, title, description, git, sourceLink, demo } = res
                                return (
                                    <Col md={12} lg={8}>
                                        <Card cover={<img alt={title} src={img} style={{ height: 200, width: '100%', justifyContent: 'center', objectFit: 'scale-down' }} />}
                                            actions={[
                                                git ? <a href={git} target='_blank'><GithubOutlined /> 源代码</a> : undefined,
                                                sourceLink ? <a href={sourceLink} target='_blank'><GlobalOutlined /> npm资源</a> : undefined,
                                                demo ? <a href={demo} target='_blank'><GlobalOutlined /> Demo</a> : undefined,
                                            ]}
                                        >
                                            <Meta
                                                title={title}
                                                description={description}
                                            />
                                        </Card></Col>
                                )
                            }
                            )}

                        </Row>
                    </div>


                    <div id='Apps'>
                        <Title level={2}>应用资源</Title>

                    </div>


                </section>
            </Space>
        </>
    )
}