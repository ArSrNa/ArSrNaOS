import dynamic from 'next/dynamic';

export default dynamic(async () => {
    const React = await import('react');
    const MainLayout = (await import('../../../src/layouts/MainLayout')).default;
    const Demo = (await import('../../../src/demo/nodejs/lrcplayer')).default;
    return function Page() {
        return (
            <MainLayout>
                <Demo />
            </MainLayout>
        );
    };
}, { ssr: false });
