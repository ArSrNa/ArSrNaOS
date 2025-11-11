
import type { Meta, StoryObj } from '@storybook/nextjs';

import { createLrcObj, LRCPlayer } from "react-lrcplayer";
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

export const 不同封面和src: Story = {
    args: {
        offset: -0.5,
        cover: "https://p3.music.126.net/XcAqPVeBNr7zDlRZRIXgug==/109951166562773552.jpg",
        src: "/demo_res/lrcplayer/Simple Plan - This Song Saved My Life.mp3",
        title: "This Song Saved My Life",
        subTitle: "Simple Plan - This Song Saved My Life",
        placeholder: "无歌词",
        lrc: createLrcObj(`[00:00.00] 作曲 : Chuck Comeau/Pierre Bouvier/Toby Gad
[00:01.00] 制作人 : Brian Howes
[00:02.00] 作词 : Chuck Comeau/Pierre Bouvier/Toby Gad
[00:07.69]I wanna start
[00:08.71]By letting you know this
[00:10.89]Because of you
[00:12.06]My life has a purpose
[00:14.14]You helped me be who I am today
[00:17.39]I see myself in every word you say
[00:20.84]Sometimes it feels
[00:22.06]Like nobody gets me
[00:23.84]Trapped in a world
[00:25.42]Where everyone hates me
[00:27.50]There's so much
[00:28.56]That I'm going through
[00:30.69]I wouldn't be here
[00:32.12]If it wasn't for you
[00:34.30]I was broken
[00:36.31]I was choking
[00:37.63]I was lost
[00:39.20]This song saved my life
[00:41.18]I was bleeding
[00:42.60]Stopped believing
[00:44.28]Could have died
[00:45.65]This song saved my life
[00:48.14]I was down
[00:49.56]I was drowning
[00:51.24]But it came on just in time
[00:55.55]This song saved my life
[01:01.25]Sometimes I feel
[01:02.47]Like you've known me forever
[01:04.50]You always know
[01:05.77]How to make me feel better
[01:07.90]Because of you
[01:09.02]My dad and me
[01:11.25]Are so much closer
[01:12.32]Than we used to be
[01:14.60]You're my escape
[01:15.62]When I'm stuck in this small town
[01:17.85]I turn you up
[01:19.18]Whenever I feel down
[01:21.26]You let me know like no one else
[01:24.40]That it's okay to be myself
[01:27.61]I was broken
[01:29.69]I was choking
[01:31.26]I was lost
[01:32.79]This song saved my life
[01:34.77]I was bleeding
[01:36.19]Stopped believing
[01:37.82]Could have died
[01:39.19]This song saved my life
[01:41.89]I was down
[01:43.36]I was drowning
[01:45.04]But it came on just in time
[01:49.66]This song saved my life
[01:55.08]You'll never know
[01:56.86]What it means to me
[02:01.54]That I'm not alone
[02:03.98]That I'll never have to be
[02:11.65]I was broken
[02:13.28]I was choking
[02:14.95]I was lost
[02:16.43]This song saved my life
[02:18.56]I was bleeding
[02:19.78]Stopped believing
[02:21.61]Could have died
[02:22.83]This song saved my life
[02:25.17]I was down
[02:26.69]I was drowning
[02:28.62]But it came on just in time
[02:32.48]This song saved my life
[02:35.33]My life
[02:36.39]My life
[02:39.60]This song saved my life
[02:42.03]My life
[02:43.71]My life
[02:46.18]This song saved my life
[02:48.77]My life
[02:50.34]My life
[02:52.99]This song saved my life
[02:55.48]My life
[02:57.06]My life
[02:59.90]This song saved my life
[03:07.28] 音频编辑 : Jay Van Poederooyen
[03:07.66] 音频助理 : Arran Baird/Joel Stratton/Keith Armstrong/Nik Karpen
[03:08.04] 音频工程师 : Angel Aponte/Jay Van Poederooyen
[03:08.43] 主人声 : Pierre Bouvier
[03:08.81] 和声 : David Desrosiers/Sebastien Lefebvre
[03:09.20] 吉他 : Jeff Stinco/Sebastien Lefebvre
[03:09.58] 键盘 : Brian Howes
[03:09.96] 鼓 : Chuck Comeau
[03:10.35] 人声 : Biran Howes
[03:10.73] 母带工程师 : Ted Jensen
[03:11.12] 低音吉他 : David Desrosiers
[03:11.50] 混音工程师 : Chris Lord-Alge
[03:11.88] 附加制作 : Andrew Schubert/Brad Townsend
`)
    },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const 带下一句播放: Story = {
    args: {
        ...common,
        nextLrc: {
            display: true,
            number: 2
        },
        animate: {
            type: "none",
            duration: 0,
        }
    },
};

export const 渐入动画: Story = {
    args: {
        ...common,
        animate: {
            type: "lrcplayer-fade",
            duration: 0.5,
        }
    },
};
