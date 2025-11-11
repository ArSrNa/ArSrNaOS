
import type { Meta, StoryObj } from '@storybook/nextjs';

import Component from 'react-av-timeline';
import 'react-av-timeline/dist/index.css'
import { ComponentProps, useEffect, useRef, useState } from 'react';
import { defaultInfo } from '@/data/visualize-player/assets';
import defaultLrc from '@/data/visualize-player/default-music';
const { music } = defaultInfo;
const { lyrics: data, characterOrder, characters } = defaultLrc


const characterItems = characterOrder.map(m => ({
    time: m.time,
    content: m.characters.length === characters.length ? "合唱" : m.characters.map(c => characters[c].cv).join(' '),
    style: {
        background: `linear-gradient(90deg, ${m.characters.map(m => characters[m].color).join(',')})`
    }
}))

const common: Partial<ComponentProps<typeof Component>> = {
    scale: 10,
    totalTime: 100,
    currentTime: 0
}
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'react-av-timeline/水平时间线',
    component: Component,
    args: {
        ...common, items: [{
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
            content: '这是第91-100秒展示的内容'
        }, {
            time: 100,
            content: '这是最后100秒展示的内容'
        }]
    },
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        currentTime: {
            type: "number",
            control: "range",
            min: 0,
            max: 100,
            step: 0.1
        }
    }
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;


export const 默认: Story = {
    args: common,
    tags: ['!autodocs'],
};

export const 音乐播放: Story = {
    args: common,
    render: (args) => {
        const [currentTime, setCurrentTime] = useState(0);
        const audio = useRef(null);
        const totalTime = audio.current?.duration || 0;

        function updateTime() {
            setCurrentTime(audio.current.currentTime);
            requestAnimationFrame(updateTime);
        }
        useEffect(() => {
            if (audio.current === null) return;
            updateTime()
        }, [])
        return <div>
            <audio style={{ width: "100%" }} controls ref={audio} src={music} />
            <Component {...args}
                totalTime={totalTime}
                items={data.map(m => ({
                    time: m.t,
                    content: m.c,
                }))} currentTime={currentTime} />
            <Component {...args}
                totalTime={totalTime}
                items={characterItems}
                currentTime={currentTime}
                itemStyle={{
                    color: 'white'
                }} />
        </div>
    }
}