import type { Meta, StoryObj } from '@storybook/nextjs';
import { useArgs } from 'storybook/preview-api';

import { TraceWaterfall } from 'react-av-timeline';
import type { TimelineClip, TimelineTrack } from 'react-av-timeline';
import 'react-av-timeline/dist/index.css';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { defaultInfo } from '@/data/visualize-player/assets';
import defaultLrc from '@/data/visualize-player/default-music';

const { music } = defaultInfo;
const { data } = defaultLrc;

const tracks: TimelineTrack[] = [
    { index: 0, name: '歌词 1' },
    { index: 1, name: '歌词 2' },
    { index: 2, name: '伴奏' },
];

const clips: TimelineClip[] = [
    { id: 'lyric-0', name: '船 摇啊摇', index: 0, start: 10.473, duration: 1.766 },
    { id: 'lyric-1', name: '摇到陌生的远方摇断了船桨', index: 0, start: 12.239, duration: 3.848 },
    { id: 'lyric-2', name: '进土壤 长成了愿望和新故乡', index: 0, start: 16.087, duration: 4.255 },
    { id: 'lyric-3', name: '我的朋友', index: 1, start: 20.724, duration: 2.035 },
    { id: 'lyric-4', name: '你在哪 是否凝望同一轮月光', index: 1, start: 22.759, duration: 3.715 },
    { id: 'lyric-5', name: '有没有 成为期待的英雄模样', index: 1, start: 26.474, duration: 4.278 },
    { id: 'accompaniment-0', name: '前奏', index: 2, start: 0, duration: 10.473 },
    { id: 'accompaniment-1', name: '主歌', index: 2, start: 10.473, duration: 20.279 },
    { id: 'accompaniment-2', name: '副歌', index: 2, start: 30.752, duration: 9.616 },
];

const common = {
    clips,
    tracks,
    viewStart: 0,
    viewDuration: 45,
    height: 320,
};

const meta = {
    title: 'react-av-timeline/瀑布时间线',
    component: TraceWaterfall,
    args: {
        ...common,
        currentTime: 0,
    },
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: '瀑布时间线（TraceWaterfall）适用于音视频导播 / 剪辑等多轨场景。片段只有 `start` + `duration`，相同 `index` 即同一轨。点击标尺可 seek，点击片段查看细节。3.0.0 新增，原有水平 / 垂直时间线 API 不变。',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        clips: {
            description: '片段数据，相同 `index` 表示同一轨；`start` 为开始时间，`duration` 为时长',
            control: 'object',
        },
        tracks: {
            description: '轨道定义，可为轨道指定名称与行高',
            control: 'object',
        },
        layout: {
            description: '行布局：`lanes` 按轨道排列，`sequence` 按开始时间平铺',
            control: 'inline-radio',
            options: ['lanes', 'sequence'],
        },
        unit: {
            description: '时间单位',
            control: 'inline-radio',
            options: ['s', 'ms'],
        },
        currentTime: {
            description: '当前时间（受控），点击标尺触发 `onCurrentTimeChange`',
            control: { type: 'number', min: 0, step: 0.1 },
        },
        viewStart: {
            description: '可 seek 的视图起始时间',
            control: 'number',
        },
        viewDuration: {
            description: '可 seek 的视图时长；晚于视图结束的片段仍会渲染但会压暗',
            control: 'number',
        },
        formatTime: {
            description: '绝对时间格式，支持 `number` / `clock` / `smpte` 或自定义函数',
            control: 'object',
        },
        fixedPlayhead: {
            description: '是否固定播放头：游标在视图前后补留白，并始终停在 `playheadPosition`',
            control: 'boolean',
        },
        playheadPosition: {
            description: '固定播放头在视图中的横向位置（0 ~ 1）',
            control: { type: 'range', min: 0, max: 1, step: 0.05 },
        },
        playing: {
            description: '播放状态；播放中且开启固定播放头 / 首行跟随时锁定纵向滚动',
            control: 'boolean',
        },
        followMode: {
            description: '首行跟随模式：`off` 关闭，`scroll` 上滚，`hide` 直接消失',
            control: 'inline-radio',
            options: ['off', 'scroll', 'hide'],
        },
        keepRowsAbove: {
            description: '跟随时目标行上方保留的行数',
            control: { type: 'number', min: 0 },
        },
        zoom: {
            description: '缩放（受控）；不传时使用 `defaultZoom` 非受控',
            control: { type: 'range', min: 1, max: 100, step: 1 },
        },
        labelWidth: {
            description: '左侧标签列初始宽度（px）',
            control: { type: 'number', min: 120, max: 480 },
        },
        rowHeight: {
            description: '默认行高（px），片段 / 轨道可单独覆盖',
            control: { type: 'number', min: 20 },
        },
        rowGap: {
            description: '行与行之间的纵向间距（px）',
            control: { type: 'number', min: 0 },
        },
        showSearch: { description: '是否显示内置搜索框', control: 'boolean' },
        showZoom: { description: '是否显示缩放按钮', control: 'boolean' },
        showTime: { description: '是否显示当前时间 / 总时间', control: 'boolean' },
        showDetail: { description: '是否显示片段详情', control: 'boolean' },
        onCurrentTimeChange: { description: '点击标尺 seek 时触发', action: 'onCurrentTimeChange' },
        onClipClick: { description: '点击片段时触发', action: 'onClipClick' },
    },
} satisfies Meta<typeof TraceWaterfall>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 默认: Story = {
    args: {
        formatTime: { type: 'clock', millisecond: true },
    },
    tags: ['autodocs'],
    render: (args) => {
        const [, updateArgs] = useArgs();
        return (
            <TraceWaterfall
                {...args}
                onCurrentTimeChange={(time) => updateArgs({ currentTime: time })}
            />
        );
    },
};

/**
 * 固定播放头 + 首行跟随，适合导播台这类需要播放头停在同一位置、歌词逐行上滚的场景。
 */
export const 固定播放头与首行跟随: Story = {
    args: {
        ...common,
        currentTime: 12,
        fixedPlayhead: true,
        playheadPosition: 0.5,
        followMode: 'scroll',
        keepRowsAbove: 1,
        formatTime: { type: 'clock', millisecond: true },
    },
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                story: '开启 `followMode` 后会强制 `sequence` 平铺布局；`playing` 为 `true` 时纵向滚动锁定，暂停后恢复自由滚动。',
            },
        },
    },
    render: (args) => {
        const [playing, setPlaying] = useState(false);
        const [currentTime, setCurrentTime] = useState(args.currentTime ?? 0);
        const frame = useRef<number | null>(null);
        const lastTs = useRef<number | null>(null);
        const start = args.viewStart ?? 0;
        const end = start + (args.viewDuration ?? 45);

        useEffect(() => {
            if (!playing) {
                if (frame.current !== null) cancelAnimationFrame(frame.current);
                frame.current = null;
                lastTs.current = null;
                return;
            }
            const step = (ts: number) => {
                if (lastTs.current === null) lastTs.current = ts;
                const delta = (ts - lastTs.current) / 1000;
                lastTs.current = ts;
                setCurrentTime((t) => {
                    const next = t + delta;
                    return next >= end ? start : next;
                });
                frame.current = requestAnimationFrame(step);
            };
            frame.current = requestAnimationFrame(step);
            return () => {
                if (frame.current !== null) cancelAnimationFrame(frame.current);
                frame.current = null;
                lastTs.current = null;
            };
        }, [playing, start, end]);

        return (
            <div>
                <Button onClick={() => setPlaying((v) => !v)}>{playing ? '暂停' : '播放'}</Button>
                <TraceWaterfall
                    {...args}
                    currentTime={currentTime}
                    onCurrentTimeChange={setCurrentTime}
                    playing={playing}
                />
            </div>
        );
    },
};

/**
 * 使用已有的歌词数据生成多轨瀑布流，配合 audio 实时同步播放头。
 */
export const 音乐播放: Story = {
    args: {
        ...common,
        layout: 'sequence',
        fixedPlayhead: true,
        playheadPosition: 0.3,
        followMode: 'scroll',
        keepRowsAbove: 1,
        currentTime: 0,
        formatTime: { type: 'clock', millisecond: true },
    },
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                story: '使用 `sequence` 平铺布局，固定播放头在 30% 位置，跟随模式下保留目标行上方 1 条片段。',
            },
        },
    },
    render: (args) => {
        const [currentTime, setCurrentTime] = useState(0);
        const [playing, setPlaying] = useState(false);
        const audio = useRef<HTMLAudioElement>(null);
        const frame = useRef<number | null>(null);

        function updateTime() {
            if (!audio.current) return;
            setCurrentTime(audio.current.currentTime);
            frame.current = requestAnimationFrame(updateTime);
        }
        useEffect(() => {
            if (audio.current === null) return;
            frame.current = requestAnimationFrame(updateTime);
            return () => {
                if (frame.current !== null) cancelAnimationFrame(frame.current);
            };
        }, []);

        const musicClips: TimelineClip[] = data.map((item, i) => {
            const [start, end] = Array.isArray(item.time) ? item.time : [item.time, item.time + 1];
            return {
                id: `lyric-${i}`,
                name: typeof item.content === 'string' ? item.content : `片段 ${i + 1}`,
                index: i % tracks.length,
                start,
                duration: end - start,
            };
        });

        return (
            <div>
                <audio
                    style={{ width: '100%' }}
                    controls
                    ref={audio}
                    src={music}
                    onPlay={() => setPlaying(true)}
                    onPause={() => setPlaying(false)}
                    onEnded={() => setPlaying(false)}
                />
                <TraceWaterfall
                    {...args}
                    clips={musicClips}
                    currentTime={currentTime}
                    playing={playing}
                />
            </div>
        );
    },
};

export const SMPTE时间码: Story = {
    args: {
        ...common,
        currentTime: 18,
        formatTime: { type: 'smpte', fps: 30 },
        unit: 's',
    },
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                story: '`formatTime` 传入 `{ type: "smpte", fps }` 可使用 SMPTE 时间码；`clock` 可配合 `offset` 做时区偏移。',
            },
        },
    },
};

export const 空数据: Story = {
    args: {
        clips: [],
        tracks: [],
        viewStart: 0,
        viewDuration: 30,
        height: 200,
        emptyText: '暂无片段',
    },
    tags: ['autodocs'],
};
