
import type { Meta, StoryObj } from '@storybook/nextjs';

import Component from 'react-av-timeline';
import 'react-av-timeline/dist/index.css'
import { useEffect, useRef, useState } from 'react';
import { defaultInfo } from '@/data/visualize-player/assets';
import defaultLrc from '@/data/visualize-player/default-music';
const { music } = defaultInfo;
const { data, characterOrder, characters } = defaultLrc


const characterItems = characterOrder.map(m => ({
    time: m.time,
    content: m.characters.length === characters.length ? "合唱" : m.characters.map(c => characters[c].cv).join(' '),
    style: {
        background: `linear-gradient(90deg, ${m.characters.map(m => characters[m].color).join(',')})`
    }
}))

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'react-av-timeline/水平时间线',
    component: Component,
    args: {
        scale: 2,
        totalTime: 40,
        currentTime: 0,
        items: [{
            time: [1, 13],
            content: '[1,13]'
        }, {
            time: [13, 69],
            content: '[13,69]'
        }, {
            time: [78, 91],
            content: '[78,91]'
        }, {
            time: [80, 98],
            content: '[80,90]重叠展示'
        }, {
            time: [91, 100],
            content: '[91,100]'
        }]
    },
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'padded',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        currentTime: {
            type: "number",
            control: "range",
            min: 1,
            max: 100,
            step: 0.1
        },
        items: {
            description: "时间轴数据项列表。当多个内容时间重叠时，会并排显示。可以通过 `level` 参数手动控制垂直层级。",
            control: 'object'
        },
        scale: {
            description: "时间轴缩放比例",
            control: { type: 'number', min: 1, max: 100 }
        },
        totalTime: {
            description: "时间轴总时长",
            control: 'number'
        }
    }
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;


export const 默认: Story = {
    args: {
        scale: 2,
        totalTime: 100,
        currentTime: 0
    },
    tags: ['autodocs'],
};

export const 音乐播放: Story = {
    args: {
        scale: 20,
        totalTime: 100,
        currentTime: 0
    },
    tags: ['autodocs'],
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
                scale={args.scale || 20}
                totalTime={totalTime}
                items={characterItems}
                currentTime={currentTime}
                itemStyle={{
                    color: 'white'
                }} />
            <Component {...args}
                totalTime={totalTime}
                items={data} currentTime={currentTime} />
        </div>
    }
}

/**
 * ### 层叠 Level 参数演示
 * 
 * 当多个时间项在时间轴上发生重叠时，组件默认会自动计算并排显示。
 * 
 * 通过为 `items` 中的单项设置 `level` 属性，你可以：
 * 1. **强制指定层级**：不再依赖自动计算，手动将元素固定在某一“行”。
 * 2. **视觉分层**：通过 `level` 配合 `style` 实现更复杂的视觉引导。
 * 
 * > 注意：`level` 越大的元素在视觉上越靠下。
 */
export const 层叠Level参数: Story = {
    args: {
        scale: 1,
        totalTime: 30,
        currentTime: 0
    },
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                story: '演示通过设置不同的 `level` 值来手动控制重叠元素的垂直层级。'
            }
        }
    },
    render: (args) => {
        return <div>
            <Component {...args}
                scale={args.scale}
                totalTime={args.totalTime}
                items={[{
                    time: [0, 20],
                    content: '默认层级 (level: 0)',
                }, {
                    time: [15, 30],
                    content: '强制下移一层 (level: 1)',
                    level: 1,
                    style: { background: '#f59e0b', color: 'white' }
                }, {
                    time: [10, 25],
                    content: '强制下移两层 (level: 2)',
                    level: 2,
                    style: { background: '#ef4444', color: 'white' }
                }]}
                currentTime={args.currentTime}
                itemStyle={{
                    color: 'white'
                }} />
        </div>
    }
}