import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";

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
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="开源资源中心 | Ar-Sr-Na" />
                <meta name="baidu-site-verification" content="codeva-8zSmxFoXSc" />
                <title>开源资源中心 | Ar-Sr-Na</title>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;

MyDocument.getInitialProps = async ctx => {
    const cache = createCache();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: App => props =>
            (
                <StyleProvider cache={cache}>
                    <App {...props} />
                </StyleProvider>
            ),
        });

    const initialProps = await Document.getInitialProps(ctx);
    const style = extractStyle(cache, true);
    return {
        ...initialProps,
        styles: (
            <>
                {initialProps.styles}
                <style dangerouslySetInnerHTML={{ __html: style }} />
            </>
        ),
    };
};
