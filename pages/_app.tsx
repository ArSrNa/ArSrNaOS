'use client'

import { uuid } from '@/src/plug';;
import './index.scss';
import '@/src/styles/globals.css'
import style from './app.module.scss';
import { RecoilRoot } from 'recoil';
import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { Github, Link2Icon } from 'lucide-react';
import { NavMenu } from '@/components/nav-menu';
import { Button } from '@/components/ui/button';
import { NavigationSheet } from '@/components/navigation-sheet';
import { Logo } from '@/components/logo';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

function Main({ Component, pageProps }) {

    return (
        <div>
            {/* <Watermark content='Ar-Sr-Na 测试版本'> */}
            <Navbar />

            {/* <Content style={{ padding: '80px 20px 0px 20px' }}> */}
            {/* <Watermark content="ArSrNa 开源中心"> */}
            <div className='mt-20 m-4'>
                <Component {...pageProps} />
            </div>
            {/* </Watermark> */}
            {/* </Content> */}
            {/* <Footer> */}
            <FooterContent />
            {/* </Footer> */}
            {/* </Watermark > */}
        </div>
    )
}

function FooterContent() {
    return (
        <div>
            <Footer />
            <div className={style.footer}>
                <div>
                    <h2>关于</h2>
                    <a target="_blank" href='https://www.arsrna.cn/' rel='noreferrer'><Link2Icon /> Ar-Sr-Na 网站</a>
                    <a target="_blank" href='https://cnb.cool/arsrna/' rel='noreferrer'><Link2Icon /> CNB</a>
                    <a target="_blank" href='https://github.com/ArSrNa/' rel='noreferrer'><Github /> github</a>
                    <a target="_blank" href='https://www.arsrna.cn/communication/' rel='noreferrer'><Link2Icon /> 联系我们</a>
                </div>

                <div>
                    <h2>开发</h2>
                    <a href='https://cnb.cool/arsrna' target='_blank'>强劲构建动力来自CNB</a>
                    <a target="_blank" href='https://nextjs.org/' rel='noreferrer'>Supercharged by Next.js</a>
                    <a target="_blank" href='https://www.arsrna.cn/app/' rel='noreferrer'>资源与应用中心</a>
                    <a target="_blank" href='https://www.arsrna.cn/' rel='noreferrer'>Ar-Sr-Na 博客</a>
                </div>

                <div>
                    <h2>更多</h2>
                    <a target="_blank" href='https://www.arsrna.cn/app/esrgan/' rel='noreferrer'>ESRGANUI 超分辨率</a>
                    <a target="_blank" href='https://www.arsrna.cn/app/render/' rel='noreferrer'>ArRM</a>
                    <a target="_blank" href='https://live.arsrna.cn/' rel='noreferrer'>音视频</a>
                    <a target="_blank" href='https://ai.arsrna.cn/' rel='noreferrer'>AI 中心</a>
                </div>
            </div>

            <div style={{ paddingTop: 20, textAlign: 'center' }}>
                <a href='https://beian.miit.gov.cn/' target='_blank'>沪ICP备2023039698号-1</a>
                上海绫中信息技术有限公司
                {/* <Divider type="vertical" /> */}
                Powered by Ar-Sr-Na
            </div>
        </div>
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

