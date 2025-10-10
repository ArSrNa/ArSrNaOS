import { useEffect, useRef, useState } from 'react';
import Component from 'react-av-timeline';
import 'react-av-timeline/dist/index.css'
import { characters, data, order } from '@/demo/nodejs/timeline/data';
import { Vertical } from 'react-av-timeline';
import { music } from '@/demo/nodejs/visualize-player/assets';

const items = data.map(m => ({
    time: m.t, content: m.c.trim() === '' ? "无歌词" : m.c
}));

const characterItems = order.map(m => ({
    time: m.time,
    content: m.characters.length === characters.length ? "合唱" : m.characters.map(c => characters[c].cv).join(' '),
    style: {
        background: `linear-gradient(90deg, ${m.characters.map(m => characters[m].color).join(',')})`
    }
}))

function App() {
    const audio = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [vertical, setVertical] = useState(false);
    const totalTime = audio.current?.duration || 0;

    function ontimeupdate() {
        setCurrentTime(audio.current?.currentTime);
        requestAnimationFrame(ontimeupdate);
    }

    useEffect(() => {
        if (audio.current === null) return;
        ontimeupdate()
    }, [])

    return (
        <>
            <audio src={music} controls ref={audio} style={{ width: '100%' }} />
            <div>
                <input type='checkbox' onChange={(e) => setVertical(e.target.checked)} />
                <label>垂直时间线</label>
            </div>
            {vertical && <Vertical height={190} prev={2} left={20} items={items} currentTime={currentTime} scale={10} totalTime={totalTime} />}

            {!vertical && <>
                <Component items={[{
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
                }, {
                    time: totalTime,
                    content: '这是最后一秒展示的内容'
                }]}
                    currentTime={currentTime}
                    scale={2}
                    totalTime={totalTime} />

                <Component items={items} currentTime={currentTime} scale={10} totalTime={totalTime} />
                <Component items={characterItems} currentTime={currentTime} scale={10} totalTime={totalTime} itemStyle={{
                    color: 'white'
                }} /></>}
            <p>文档请见<a href='https://cnb.cool/arsrna/os/react-timeline' target='_blank'>https://cnb.cool/arsrna/os/react-timeline</a></p>
        </>
    );
}

export default App;
