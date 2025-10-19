import React, { useState, useEffect, useRef } from "react";
import { Form, Input, Checkbox, Radio, InputNumber, Button } from "antd";
import { createLrcObj, LRCPlayer } from "react-lrcplayer";
import "react-lrcplayer/dist/index.css";

const lrc = createLrcObj(`[00:00.00] 作词 : Konnie Aoki
[00:00.41] 作曲 : TeddyLoid
[00:00.82] 编曲 : TeddyLoid
[00:01.24]I used to look above at stars, and chase
[00:05.32]Never had to doubt what I could take
[00:09.48]Now I've found it's further than it seemed
[00:13.29]The light gets smaller, my eyes to a closure
[00:17.52]
[00:18.41]When did it happen？ Turned away my face
[00:22.43]When did it happen？ Pain increasing
[00:26.59]Shadow walk and dealing, truth inside revealing
[00:30.72]Still, a part of me's seeking that feeling
[00:33.00]
[00:33.54]Dreams in the sound that I made for you
[00:37.76]Go 'round, come returning through me
[00:42.97]Where this light shines so bright, you showed
[00:49.82]It's back and now
[00:51.26]
[00:51.78]Take your hand out, we can reach
[00:53.17]Always been there to be freed
[00:55.35]It's getting loud, on to a scream
[00:57.31]We're starting this brighter tomorrow
[01:02.81]Try this
[01:05.90]Every color shown, bright in the star
[01:14.75]From here we can find
[01:19.47]Letting us shine
[01:23.61]Don't hide your brightness
[01:24.90]
[01:26.71]Approval of someone to feel complete
[01:30.87]Honesty was gone to say the least
[01:35.05]Many things about us are the same
[01:38.82]The distance for us is hard to decipher
[01:43.19]
[01:43.51]Why did it happen？ I've imagined your face
[01:48.04]Thinking about this lonely feeling
[01:52.19]Standing still exceeding, urge and drive increasing
[01:56.46]I've gotta be by you and speaking
[01:58.98]
[01:59.31]A little time has been taken
[02:03.35]I find it was time we needed
[02:08.43]When our minds are aligned, we know
[02:15.31]That star's in view
[02:16.86]
[02:17.20]Let's restart it, you and me
[02:18.75]Walking on our new story
[02:20.89]I feel your voice, my melodies
[02:22.83]Don't worry when struggling to follow
[02:28.32]Find this
[02:32.49]Allow this
[02:33.22]
[02:33.57]Take your hand out, we can reach
[02:35.33]Always been there to be freed
[02:37.51]It's getting loud, on to a scream
[02:39.47]We're starting this brighter tomorrow
[02:44.99]Try this
[02:48.17]Every color shown, bright in the star
[02:56.02]From here we can find
[03:02.04]Letting us shine
[03:05.77]Don't hide your brightness
`);

export default function LRCPlayerDemo() {
    const [form] = Form.useForm();
    const [config, setConfig] = useState<React.ComponentProps<typeof LRCPlayer>>({
        lrc,
        src: "https://res.arsrna.cn/audios/内田秀 - stars we chase.mp3",
        cover: "/demo_res/lrcplayer/cover.jpg",
        title: "内田秀 - stars we chase",
        subTitle: "TV动画《Love Live! 虹咲学园校园偶像同好会 第二季》第9集插曲",
        placeholder: "无歌词",
        offset: -0.3,
        animate: { type: "lrcplayer-slide", duration: 8 },
        nextLrc: {
            display: true,
            number: 2
        }
    });

    return (
        <>
            <h1>自定义</h1>
            <Form
                form={form}
                onValuesChange={(changed, value) => setConfig(prev => ({ ...prev, ...value }))}
                initialValues={config}
            >
                <Form.Item name="placeholder" label="placeholder（无歌词显示）">
                    <Input />
                </Form.Item>

                <Form.Item name="offset" label="offset（歌词时差）">
                    <InputNumber />
                </Form.Item>

                <Form.Item name={["animate", "type"]} label="animateType（动画类型）">
                    <Radio.Group>
                        <Radio value="lrcplayer-slide">lrcplayer-slide 划出</Radio>
                        <Radio value="lrcplayer-fade">lrcplayer-fade 淡入</Radio>
                        <Radio value="none">none 无</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item name={["animate", "duration"]} label="animateDuration（动画时长）">
                    <InputNumber />
                </Form.Item>

                <Form.Item
                    name={["nextLrc", "display"]}
                    valuePropName="checked"
                    label="nextLrcDisplay（显示下一句）"
                >
                    <Checkbox />
                </Form.Item>

                <Form.Item name={["nextLrc", "number"]} label="nextLrcNumber（显示句数）">
                    <InputNumber />
                </Form.Item>
            </Form>
            <LRCPlayer {...config} />
            文档请见
            <a href="https://www.npmjs.com/package/react-lrcplayer" target="_blank">
                https://www.npmjs.com/package/react-lrcplayer
            </a>
        </>
    );
}
