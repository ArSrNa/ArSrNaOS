'use client';
import { uuid } from '@/src/plug';;
import './index.scss';
import '@/src/styles/globals.css'
import { RecoilRoot } from 'recoil';
import { useEffect } from 'react';
import { AppProps } from 'next/app';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

function Main({ Component, pageProps }) {

    return (
        <div>
            <Navbar />
            <div className='mt-20 m-4'>
                <Component {...pageProps} />
            </div>
            <Footer />
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

