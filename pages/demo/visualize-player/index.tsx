'use client'
import { use, useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import style from './index.module.scss';
import Timeline from 'react-av-timeline';
import 'react-av-timeline/dist/index.css';
import defaultLyric from '@/data/visualize-player/default-music';
import { defaultInfo, starInfo } from '@/data/visualize-player/assets';
import { Separator } from '@/components/ui/separator';
import dynamic from 'next/dynamic';
const LyricPlayer = dynamic(
    () => import('@applemusic-like-lyrics/react').then((mod) => {
        return mod.LyricPlayer
    }),
    { ssr: false }
);
import {
    parseTTML,
} from "@applemusic-like-lyrics/lyric";

import '@applemusic-like-lyrics/core/style.css';

// gsap.registerPlugin(useGSAP);

export default function VPDemo() {
    return <div className='space-y-10'>
        <div className='my-10 text-center'>
            <h1 className='text-2xl font-bold py-2'>使用横屏设备获得更好体验</h1>
            <span>暂不支持移动端，也不支持竖屏。设备太小无法完整显示。</span>
            <p>
                源代码与文档（暂无）请见：<a href='https://cnb.cool/arsrna/visualize-music' target='_blank'>https://cnb.cool/arsrna/visualize-music</a>
                <br />
                TimeLine组件源代码与文档请见：<a href='https://cnb.cool/arsrna/os/react-timeline' target='_blank'>https://cnb.cool/arsrna/os/react-timeline</a>
            </p>
        </div>

        <Separator />
        <Default />
        <Separator />
        {/* <Star /> */}
        <footer className='text-center text-gray-500 my-10'>仅供学习使用，禁止商业用途，音乐版权归原曲作者所有</footer>
    </div>
}

function Default() {
    const { characterOrder, characters, lyrics } = defaultLyric;
    const [lyricLines, setLyricLines] = useState([]);
    const [current, setCurrent] = useState<number[]>([]);
    const [currentTime, setCurrentTime] = useState(0);
    const { cover: coverImg, music } = defaultInfo;
    const audio = useRef<HTMLAudioElement>(null);
    const playerRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            playerRef.current?.lyricPlayer?.calcLayout(true);
        }, 1500);
    }, []);

    useEffect(() => {
        fetch('/demo_res/visualize-player/lrc.txt').then(msg => msg.text()).then(msg => {
            setLyricLines(parseTTML(msg).lines);
        })
    }, []);

    function updateCharacter(currentTime: number) {
        const currentCharacters = characterOrder.filter(m => m.time <= currentTime).at(-1);
        if (!currentCharacters) {
            setCurrent([]);
            return;
        }
        setCurrent(currentCharacters.characters);
    }

    function onTimeUpdate() {
        /**带一点动画延迟，所以需要提前0.3s */
        const currentTime = audio.current?.currentTime || 0;
        setCurrentTime(currentTime);
        updateCharacter(currentTime);
        requestAnimationFrame(onTimeUpdate);
    }

    useEffect(() => {
        if (audio.current === null) return;
        onTimeUpdate();
        updateCharacter(0);
        return () => {
            // cancelAnimationFrame(onTimeUpdate);
        }
    }, [audio.current]);

    return (<>
        <div className='grid lg:grid-cols-[520px_1fr] xs:grid-cols-[1fr] items-center justify-center'>
            <LyricPlayer
                style={{
                    filter: "invert(100%)"
                }}
                size={80}
                ref={playerRef}
                alignAnchor="center"
                className='w-full h-full my-2'
                lyricLines={lyricLines}
                currentTime={currentTime * 1000}
            />
            <div className='flex flex-col gap-2 justify-center items-center'>
                <div>
                    <div className={style['character-container']} style={{ '--bg': characters[current[0]]?.color || 'white' } as CSSProperties}>
                        {characters.map((m, i) => <div key={`img_${m.name}`}
                            className={`${style['character-img']} ${current.includes(i) ? style['character-img-active'] : ''}`}>
                            <img src={m.img} alt={m.name} />
                            <div className={style['layer']} style={{ "--bg": m.color } as CSSProperties}>
                                <div className={style['layer-name']}>{m.name}</div>
                                <div className={style['layer-cv']}>CV: {m.cv}</div>
                            </div>
                        </div>)}
                    </div>
                    <div className={style['character-indicator']} style={{
                        '--bg': current.length === 0
                            ? `linear-gradient(90deg, ${characters.map(m => m.color).join(',')})`
                            : `linear-gradient(90deg, ${current.map(m => characters[m].color).join(',')})`
                    } as CSSProperties} />

                </div>
                {/* <Timeline
                    scale={9.1}
                    itemStyle={{
                        color: 'white',
                    }}
                    items={characterOrder.map(m => {
                        const background = m.characters.length === characters.length
                            ? `linear-gradient(90deg, ${characters.map(m => m.color).join(',')})`
                            : `linear-gradient(90deg, ${m.characters.map(m => characters[m].color).join(',')})`;
                        const content = m.characters.length === characters.length ? "合唱" : m.characters.map(m => characters[m].name + '  ');
                        return ({
                            time: m.time,
                            content,
                            style: {
                                background
                            }
                        });
                    })}
                    currentTime={currentTime}
                    totalTime={audio.current?.duration || 1}
                /> */}
                <div className={style['info']}>
                    <img src={typeof coverImg === 'string' ? coverImg : (coverImg as any).src} />
                    <div>
                        <h3 className='text-xl font-bold'>提瓦特民谣 - 宴宁 / XY大甘蔗 / 柳知萧 / 闫夜桥 / 陶典 / 孙晔</h3>
                        <small className='text-gray-500'>游戏《原神》五周年同人曲</small>
                    </div>
                </div>

                <audio ref={audio} src={music} className={style['audio']} controls />
            </div>
        </div>
        {/* <div className={style['lyric']}>{lyric}</div> */}
    </>);
}


// function Star() {
//     const { cover: coverImg, music } = starInfo;
//     const { characterOrder, characters, lyrics } = starLyric;
//     const [current, setCurrent] = useState<number[]>([0]);
//     const [lrc, setLrc] = useState<ReactNode>(<span></span>);
//     const [currentTime, setCurrentTime] = useState(0);
//     const audio = useRef<HTMLAudioElement>(null);

//     useGSAP(() => {
//         const tl = gsap.timeline();
//         tl.fromTo(`.${style['layer-lyric']}`, {
//             y: 10,
//             opacity: 0,
//             duration: 0.2
//         }, {
//             opacity: 1,
//             y: 0,
//         });
//     }, [lrc]);

//     function updateLRC(currentTime: number) {
//         const currentLyric = lyrics.filter(m => m.t <= currentTime).at(-1);
//         const placeholder = '无歌词';
//         if (!currentLyric) return;
//         const lrc = currentLyric.c.trim();
//         if (lrc === '') {
//             setLrc(<small style={{ color: 'gray' }}>{placeholder}</small>);
//         } else {
//             setLrc(lrc);
//         }
//     }

//     function updateCharacter(currentTime: number) {
//         const currentCharacters = characterOrder.filter(m => m.time <= currentTime).at(-1);
//         if (!currentCharacters) {
//             setCurrent([]);
//             return;
//         }
//         setCurrent(currentCharacters.characters);
//     }

//     function onTimeUpdate() {
//         /**带一点动画延迟，所以需要提前0.3s */
//         const currentTime = audio.current?.currentTime || 0 + 0.3;
//         setCurrentTime(currentTime);
//         updateLRC(currentTime);
//         updateCharacter(currentTime);
//         requestAnimationFrame(onTimeUpdate);
//     }

//     useEffect(() => {
//         if (audio.current === null) return;
//         onTimeUpdate();
//     }, []);

//     return (<div className='md:px-20 sm:px-0'>
//         <audio ref={audio} src={music} controls className='w-full' />
//         <div className={style['star-character']}>
//             {characters.map((m, i) => <div key={`img_star_${m.name}`} data-active={current.includes(i)} className={style['img']}>
//                 <img src={m.img} alt={m.name} style={{
//                     '--x': m?.position?.[0] + "%",
//                     '--y': m?.position?.[1] + "%",
//                     scale: 1.1,
//                     maskImage: `linear-gradient(${m?.position?.[2] ? "to left" : "to right"}, ${m.color} 50%, transparent 90%)`
//                 } as CSSProperties} />
//                 <div className={style['layer']} style={{ "--bg": m.color, left: m?.position?.[2] ? "10%" : "80%" } as CSSProperties}>
//                     <div className={style['layer-name']}>{m.name}</div>
//                     <div className={style['layer-cv']}>CV: {m.cv}</div>
//                 </div>

//                 <div className={style['layer-lyric']}>{lrc}</div>
//             </div>)}
//         </div>

//     </div>)
// }