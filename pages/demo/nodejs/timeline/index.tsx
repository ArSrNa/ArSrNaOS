import { useEffect, useRef, useState } from 'react';
import 'react-av-timeline/dist/index.css';

const TimeLine = dynamic(
    () => import('react-av-timeline'),
    { ssr: false }
);


import { characters, data, order } from './data';
import { music } from '../visualize-music/assets';
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
            123
            <TimeLine items={[{
                time: 1,
                content: '这是第一秒展示的内容'
            }, {
                time: 69,
                content: '这是第69秒展示的内容'
            }]}
                currentTime={currentTime}
                scale={1}
                totalTime={audio.current?.duration} />

            <TimeLine items={items} currentTime={currentTime} scale={10} totalTime={audio.current?.duration} />
            <TimeLine items={characterItems} currentTime={currentTime} scale={5} totalTime={audio.current?.duration} itemStyle={{
                color: 'white'
            }} />
            <audio src={music} controls ref={audio} style={{ width: '100%' }} />
        </>
    );
}