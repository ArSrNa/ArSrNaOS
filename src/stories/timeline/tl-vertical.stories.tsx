
import type { Meta, StoryObj } from '@storybook/nextjs';

import { Vertical } from 'react-av-timeline';
import 'react-av-timeline/dist/index.css'
import { ComponentProps, useEffect, useRef, useState } from 'react';
import { defaultInfo } from '@/data/visualize-player/assets';
import defaultLrc from '@/data/visualize-player/default-music';
const { music } = defaultInfo;
const { lyrics: data } = defaultLrc

const common: Partial<ComponentProps<typeof Vertical>> = {
    scale: 10,
    left: 10,
    prev: 2,
    height: 200,
    itemStyle: {
        color: 'black'
    },
}
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'react-av-timeline/垂直时间线',
    component: Vertical,
    args: {
        ...common,
        items: [{
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
        }],
        totalTime: 100,
        currentTime: 0
    },
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        // layout: 'centered',
        docs: {
            description: {
                component: '垂直时间线，适用于自动化场景，在过n条后自动消失。'
            }
        },
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        currentTime: {
            type: "number",
            description: '当前时间',
            control: "range",
            min: 0,
            max: 100,
            step: 0.1
        },
        totalTime: {
            description: '时间线总时长'
        },
        prev: {
            description: '显示前n个项目'
        },
        height: {
            description: '时间线高度'
        },
        itemStyle: {
            description: '时间线项目样式'
        },
        scale: {
            type: "number",
            description: '时间线缩放',
            control: "range",
            min: 0,
            max: 100,
            step: 0.1
        },
        left: {
            type: "number",
            description: '时间线距离左侧宽度（百分比）',
            control: "range",
            min: 0,
            max: 100,
            step: 0.1
        },
    }
} satisfies Meta<typeof Vertical>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 默认: Story = {
    args: common,
    tags: ['autodocs'],
};

export const 音乐播放: Story = {
    args: common,
    render: (args) => {
        const [currentTime, setCurrentTime] = useState(0);
        const audio = useRef(null);
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
            <Vertical {...args} items={data.map(m => ({
                time: m.t,
                content: m.c,
            }))} currentTime={currentTime} />
        </div>
    }
}