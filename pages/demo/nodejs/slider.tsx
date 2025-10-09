import dynamic from 'next/dynamic';
import MainLayout from '../../../src/layouts/MainLayout';

const Demo = dynamic(() => import('../../../src/demo/nodejs/slider'), { ssr: false });

export const getServerSideProps = async () => ({ props: {} });

export default function Page() {
    return (
        <MainLayout>
            <Demo />
        </MainLayout>
    );
}
