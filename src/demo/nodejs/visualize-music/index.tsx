import { useEffect, useRef, useState, type CSSProperties, type ReactNode, type SyntheticEvent } from 'react';
import style from './index.module.scss';
import Timeline from 'react-av-timeline';
import 'react-av-timeline/dist/index.css';
import { characterOrder, characters, lyrics } from './utils';
import { cover, music } from './assets';

export default function VPDemo() {
    const [lyric, setLyric] = useState<ReactNode>('');
    const [current, setCurrent] = useState([]);
    const [currentTime, setCurrentTime] = useState(0);
    const scale = 5;

    const audio = useRef<HTMLAudioElement>(null);

    function updateLRC(currentTime: number) {
        const currentLyric = lyrics.filter(m => m.t <= currentTime).at(-1);
        const placeholder = '无歌词';
        if (!currentLyric) return;
        const lrc = currentLyric.c.trim();
        if (lrc === '') {
            setLyric(<small className={style['lyric-animate']} key={placeholder} style={{ color: 'gray' }}>{placeholder}</small>);
        } else {
            setLyric(<span className={style['lyric-animate']} key={lrc}>{lrc}</span>);
        }
    }

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
        const currentTime = audio.current?.currentTime || 0 + 0.3
        const progress = (currentTime / (audio.current?.duration || 1)) * 100;
        setCurrentTime(currentTime);
        updateLRC(currentTime);
        updateCharacter(currentTime);
        requestAnimationFrame(onTimeUpdate);
    }

    useEffect(() => {
        if (audio.current === null) return;
        onTimeUpdate()
    }, [])


    useEffect(() => {
        updateLRC(0);
        // console.log(lyrics)
        // console.log(characterOrder)
    }, []);

    return (
        <div className={style['container']}>
            <h1>使用横屏设备获得更好体验</h1>
            <div>
                <div className={style['character-container']}>
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
                    background: current.length === 0
                        ? `linear-gradient(90deg, ${characters.map(m => m.color).join(',')})`
                        : `linear-gradient(90deg, ${current.map(m => characters[m].color).join(',')})`
                }} />

                <Timeline
                    scale={6.9}
                    itemStyle={{
                        color: 'white',
                    }}
                    items={characterOrder.map(m => {
                        const background = m.characters.length === characters.length
                            ? `linear-gradient(90deg, ${characters.map(m => m.color).join(',')})`
                            : `linear-gradient(90deg, ${m.characters.map(m => characters[m].color).join(',')})`
                        const content = m.characters.length === characters.length ? "合唱" : m.characters.map(m => characters[m].name + ' ')
                        return ({
                            time: m.time,
                            content,
                            style: {
                                background
                            }
                        })
                    })}
                    currentTime={currentTime}
                    totalTime={audio.current?.duration || 1}
                />
            </div>
            <div className={style['lyric']}>{lyric}</div>

            <div className={style['info']}>
                <img src={cover} />
                <div>
                    <h3>提瓦特民谣 - 宴宁 / XY大甘蔗 / 柳知萧 / 闫夜桥 / 陶典 / 孙晔</h3>
                    <small>游戏《原神》五周年同人曲</small>
                </div>
            </div>
            <audio ref={audio} src={music} className={style['audio']} controls />


            <footer>Powered by Ar-Sr-Na www.arsrna.cn<br />仅供学习使用，禁止商业用途，音乐版权归原曲作者所有</footer>
        </div>
    );
}