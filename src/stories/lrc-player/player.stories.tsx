
import type { Meta, StoryObj } from '@storybook/nextjs';

import { LRCPlayer } from "react-lrcplayer";
import 'react-lrcplayer/dist/index.css';
import { lrc } from '@/data/lrc-player';
import { ComponentProps } from 'react';

const common: ComponentProps<typeof LRCPlayer> = {
    lrc,
    src: "https://res.arsrna.cn/audios/内田秀 - stars we chase.mp3",
    cover: "/demo_res/lrcplayer/cover.jpg",
    title: "内田秀 - stars we chase",
    subTitle: "TV动画《Love Live! 虹咲学园校园偶像同好会 第二季》第9集插曲",
    placeholder: "无歌词",
    offset: -0.3,
    animate: {
        type: "lrcplayer-slide",
        duration: 8
    },
    nextLrc: {
        display: false,
        number: 2
    }
}
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'react-lrcplayer',
    component: LRCPlayer,
    args: common,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        lrc: {
            control: {
                type: 'object'
            }
        }
    }
} satisfies Meta<typeof LRCPlayer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 默认: Story = {
    args: {
        ...common,
    },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const 带下一句播放: Story = {
    args: {
        ...common,
        nextLrc: {
            display: true,
            number: 2
        }
    },
};
