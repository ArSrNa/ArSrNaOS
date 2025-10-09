'use client'

import {
    Layout, Menu, Watermark,
    Input, Typography, Row, Col, Divider, Space
}
    from 'antd';
import { GithubOutlined, GlobalOutlined } from '@ant-design/icons'
import { uuid } from '@/plug';;
import './index.scss';

import { RecoilRoot } from 'recoil';
import { useEffect } from 'react';
import { AppProps } from 'next/app';
const { Content, Footer } = Layout;
const { Title } = Typography


function Main({ Component, pageProps }) {

    return (
        <>
            {/* <Watermark content='Ar-Sr-Na 测试版本'> */}
            <Layout style={{ minHeight: '100vh' }}>
                <div className='nav-blur'>
                    <img height="60" src={'/icon.ico'} style={{ paddingRight: 5 }} alt="logo" />
                    <span className='lead'>ArSrNa 资源与应用</span>
                    <Menu mode="horizontal" defaultSelectedKeys={["/"]} style={{ marginLeft: 30, background: 'rgba(0,0,0,0)' }}
                        items={[{
                            label: '首页',
                            key: '/',
                        }, {
                            label: '回到主站',
                            key: 'https://www.arsrna.cn',
                        },
                        ]}
                        onClick={(e) => window.open(e.key, '_self')}
                    >
                    </Menu>
                </div>
                <Content style={{ padding: '80px 20px 0px 20px' }}>
                    {/* <Watermark content="ArSrNa 开源中心"> */}
                    <Component {...pageProps} />
                    {/* </Watermark> */}
                </Content>
                <Footer>
                    <FooterContent />
                </Footer>
            </Layout>

            {/* </Watermark > */}
        </>
    )
}

function FooterContent() {
    return (
        <>
            <Divider />
            <Row gutter={16}>
                <Col span={8}>
                    <Space direction='vertical'>
                        <Title level={4}>关于</Title>
                        <a target="_blank" href='https://www.arsrna.cn/' rel='noreferrer'><GlobalOutlined /> Ar-Sr-Na 网站</a>
                        <a target="_blank" href='https://cnb.cool/arsrna/' rel='noreferrer'><GlobalOutlined /> CNB</a>
                        <a target="_blank" href='https://github.com/ArSrNa/' rel='noreferrer'><GithubOutlined /> github</a>
                        <a target="_blank" href='https://www.arsrna.cn/communication/' rel='noreferrer'><GlobalOutlined /> 联系我们</a>
                    </Space>
                </Col>

                <Col span={8}>
                    <Space direction='vertical'>
                        <Title level={4}>开发</Title>
                        <a href='https://cnb.cool/arsrna' target='_blank'>强劲构建动力来自CNB</a>
                        <div>Supercharged by Next.js</div>
                        <a target="_blank" href='https://www.arsrna.cn/app/' rel='noreferrer'>资源与应用中心</a>
                        <a target="_blank" href='https://www.arsrna.cn/' rel='noreferrer'>Ar-Sr-Na 博客</a>
                    </Space>
                </Col>

                <Col span={8}>
                    <Space direction='vertical'>
                        <Title level={4}>更多</Title>
                        <a target="_blank" href='https://www.arsrna.cn/app/esrgan/' rel='noreferrer'>ESRGANUI 超分辨率</a>
                        <a target="_blank" href='https://www.arsrna.cn/app/render/' rel='noreferrer'>ArRM</a>
                        <a target="_blank" href='https://live.arsrna.cn/' rel='noreferrer'>音视频</a>
                        <a target="_blank" href='https://ai.arsrna.cn/' rel='noreferrer'>AI 中心</a>
                    </Space>
                </Col>
            </Row>

            <div style={{ paddingTop: 20, textAlign: 'center' }}>
                <a href='https://beian.miit.gov.cn/' target='_blank'>沪ICP备2023039698号-1</a>
                <Divider type="vertical" />
                上海绫中信息技术有限公司
                <Divider type="vertical" />
                Powered by Ar-Sr-Na
            </div>
        </>
    )
}


function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        const Aegis = require("aegis-web-sdk");
        const aegis = new Aegis({
            id: 'W7oejTaL4r0ek1Yg67', // 上报 id
            uin: `ArSrNaOS ${uuid()}`, // 用户唯一 ID（可选）
            reportApiSpeed: true, // 接口测速
            reportAssetSpeed: true, // 静态资源测速
            spa: true, // spa 应用页面跳转的时候开启 pv 计算
            hostUrl: 'https://rumt-zh.com'
        });
    }, []);


    return (
        <RecoilRoot>
            <Main Component={Component} pageProps={pageProps} />
        </RecoilRoot>
    );
}

export default App;

