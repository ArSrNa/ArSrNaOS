
import { CNBIcon } from '@/src/components';
import { Code2Icon, CurlyBracesIcon, FrameIcon, Github, Link2Icon, PackageIcon, XIcon } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import style from './index.module.scss';
import { Pill, PillStatus } from '@/src/components/ui/shadcn-io/pill';
import { Separator } from '@/components/ui/separator';
import { CardInfo, res } from '@/data/res';
import Link from 'next/link';
import { uuid } from '@/src/plug';
import { ImageZoom } from '@/src/components/ui/shadcn-io/image-zoom';

export default function Home() {
    const itemClass = 'grid lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-5';
    const cardBtnClass = 'flex flex-row gap-2 rounded-md px-2 py-1 border border-gray-300 hover:bg-gray-100 transition-all cursor-pointer items-center text-sm';
    function FooterAction({ link }: { link: CardInfo['link'] }) {
        const iconEnum = {
            git: <Github size={18} />,
            cnb: <CNBIcon />,
            sourceLink: <PackageIcon size={18} />,
            demo: <CurlyBracesIcon size={18} />,
            preview: <Link2Icon size={18} />,
        }
        const nameEnum = {
            git: 'Github',
            cnb: 'CNB',
            sourceLink: 'NPM',
            demo: 'Demo',
            preview: '演示',
        }

        const linkEnmum = (type: keyof typeof link) => {
            if (type === 'demo') return 'https://os-demo.arsrna.cn?path=' + link[type];
            if (type === 'cnb') return 'https://cnb.cool/' + link[type];
            return link[type]
        }

        return Object.keys(link).map((key: keyof typeof link) => (
            <Link className={cardBtnClass} href={linkEnmum(key)} key={uuid()} target='_blank'>
                {iconEnum[key]} {nameEnum[key]}
            </Link>
        ))
    }

    return (
        <div className='space-y-10'>
            <div>
                <div style={{ zIndex: 1, position: 'absolute', padding: 50, color: 'white' }}>
                    <div className='title' style={{ letterSpacing: 3 }}>ArSrNa 资源与应用</div>
                    <span className='lead'>开源资源中心</span>
                </div>
                <img src='./images/index.jpg' className='hdpic' />
            </div>

            {Object.keys(res).map(key => (<section key={key} className='space-y-5'>
                <h1 className='font-bold text-2xl'>{key}</h1>
                <div className={itemClass}>
                    {res[key].map(({
                        title, img, description, link, info, actions
                    }) => (
                        <Card key={title}>
                            <CardHeader>
                                <CardTitle>{title}</CardTitle>
                                <CardDescription className='h-5'>{description}</CardDescription>
                            </CardHeader>
                            <Separator />
                            <CardContent>
                                <ImageZoom>
                                    <img
                                        src={img}
                                        alt={title}
                                        className="w-full h-40 object-scale-down" />
                                </ImageZoom>
                                <Separator className='my-2' />
                                <div className='flex flex-wrap gap-1'>
                                    {info?.lang && <Pill>
                                        <PillStatus>
                                            <Code2Icon className="text-emerald-500" size={12} />
                                            {info.lang}
                                        </PillStatus>
                                        语言
                                    </Pill>}

                                    {info?.framework && <Pill>
                                        <PillStatus>
                                            <FrameIcon className="text-purple-500" size={12} />
                                            {info.framework}
                                        </PillStatus>
                                        构建
                                    </Pill>}
                                </div>

                                {link?.cnb && <div className='mt-2 flex flex-wrap gap-1'>
                                    <img className='object-scale-down' src={`https://commit.cool/badge/build/pipelines/${link.cnb}`} />
                                    <img className='object-scale-down' src={`https://commit.cool/badge/license/${link.cnb}`} />
                                    <img className='object-scale-down' src={`https://commit.cool/badge/commit/recent/${link.cnb}`} />
                                </div>}

                            </CardContent>
                            <Separator />
                            <CardFooter className={style['card-btn']}>
                                <div className='flex flex-row gap-2 flex-wrap'>
                                    {link && <FooterAction link={link} />}
                                    {actions && actions.map(m => <Link className={cardBtnClass} href={m.link} key={m.link} target='_blank'>
                                        {m.icon} {m.title}
                                    </Link>)}
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>))}
        </div>
    );
}