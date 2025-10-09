import dynamic from 'next/dynamic';

export default dynamic(async () => {
    const React = await import('react');
    const MainLayout = (await import('../../src/layouts/MainLayout')).default;
    const BlackBox = (await import('../../src/opentdp/blackbox')).default;
    return function BlackboxPage() {
        return (
            <MainLayout>
                <BlackBox />
            </MainLayout>
        );
    };
}, { ssr: false });
