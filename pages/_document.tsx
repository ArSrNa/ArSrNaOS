import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="zh">
                <meta charSet="utf-8" />
                <link rel="icon" href="/logo.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#ffffff" />
                <meta name="description" content="开源资源中心 | Ar-Sr-Na" />
                <meta name="baidu-site-verification" content="codeva-8zSmxFoXSc" />
                <title>开源资源中心 | Ar-Sr-Na</title>
                <Head>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: "(function(){try{var t=localStorage.getItem('arsrna-theme');var d=t==='dark'||((!t||t==='system')&&window.matchMedia('(prefers-color-scheme: dark)').matches);var r=document.documentElement;r.classList.toggle('dark',d);r.style.colorScheme=d?'dark':'light';}catch(e){}})();",
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;