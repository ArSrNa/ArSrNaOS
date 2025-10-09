import { useEffect, useRef, useState } from 'react';
import 'react-av-timeline/dist/index.css';

const TimeLine = dynamic(
    () => import('react-av-timeline'),
    { ssr: false }
);


import { characters, data, order } from '@/demo/nodejs/timeline/data';
import { music } from '@/demo/nodejs/visualize-player/assets';
import dynamic from 'next/dynamic';

const items = data.map(m => ({
    time: m.t, content: m.c
}));

const characterItems = order.map(m => ({
    time: m.time,
    content: m.characters.length === characters.length ? "合唱" : m.characters.map(c => characters[c].cv).join(' '),
    style: {
        background: `linear-gradient(90deg, ${m.characters.map(m => characters[m].color).join(',')})`
    }
}))

export default function TimelineDemo() {
    const audio = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);
    function ontimeupdate() {
        setCurrentTime(audio.current.currentTime + 0.3);
        requestAnimationFrame(ontimeupdate);
    }

    useEffect(() => {
        // console.log(TimeLine)
        if (audio.current === null) return;
        ontimeupdate();
    }, [])

    return (
        <>
            <TimeLine items={[{
                time: 1,
                content: '这是第1-13秒展示的内容'
            }, {
                time: 13,
                content: '这是第13-69秒展示的内容'
            }, {
                time: 69,
                content: '这是第69-78秒展示的内容'
            }, {
                time: 78,
                content: '这是第78-91秒展示的内容'
            }, {
                time: 91,
                content: '这是第91-最后一秒展示的内容'
            }]}
                currentTime={currentTime}
                scale={1}
                totalTime={audio.current?.duration} />

            <TimeLine items={items} currentTime={currentTime} scale={10} totalTime={audio.current?.duration} />
            <TimeLine items={characterItems} currentTime={currentTime} scale={5} totalTime={audio.current?.duration} itemStyle={{
                color: 'white'
            }} />
            <p>TimeLine组件源代码与文档请见：<a href='https://cnb.cool/arsrna/os/react-timeline' target='_blank'>https://cnb.cool/arsrna/os/react-timeline</a></p>
            <audio src={music} controls ref={audio} style={{ width: '100%' }} />
            <footer style={{
                color: 'gray',
                textAlign: 'center'
            }}>Powered by Ar-Sr-Na www.arsrna.cn<br />仅供学习使用，禁止商业用途，音乐版权归原曲作者所有</footer>
        </>
    );
}