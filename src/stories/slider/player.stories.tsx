
import type { Meta, StoryObj } from '@storybook/nextjs';

import { ComponentProps } from 'react';
import Slider, { itemProps } from "react-fade-slider";
import "react-fade-slider/dist/index.css";
import { fn } from 'storybook/test';
import src1Img from './images/16de7766a642388d21e4c76cacfde801_5165224128247218265.png';
import src2Img from './images/5b60764dabc3bf50c2ad7b5ff8eae80b_2607687582866761407.png';
import src3Img from './images/fa9fc6e9532e4c56c9ad0e5e9548a06a_2258061419554533859.png';
const img1 = typeof src1Img === 'string' ? src1Img : (src1Img as any).src;
const img2 = typeof src2Img === 'string' ? src2Img : (src2Img as any).src;
const img3 = typeof src3Img === 'string' ? src3Img : (src3Img as any).src;

const common: ComponentProps<typeof Slider> = {
    item: [
        {
            src: img1,
            title: "孑遗千星——星之环",
            content: "分野：无存之仪。特性：万有之星、界域共鸣、星影偕行、天渊易位",
        }, {
            src: img2,
            title: "超长文本内容和标题截断示例",
            content: `
                崩坏三 LV6 粉丝团17<br />
                5小时前 IP属地：上海<br /><br />
                不对，你不是爱酱!你是谁!(芽衣·大荒囚天指)<br /><br />
                崩坏三 LV6 粉丝团17<br />
                3小时前 IP属地：上海<br /><br />
                (创死他克利希娜)爱酱!撑住啊!我这就来救亻<br /><br />
                崩坏三 LV6 粉丝团17<br />13分钟前 IP属地：上海<br /><br />
                薇塔大人ᐠ( ᑒ )ᐟ 薇塔大人ᐠ( ᑒ )ᐟ 2024-08-31<br /><br />
                回复<br /><br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt et suscipit repellendus nesciunt nulla eum modi velit sit debitis vel. Beatae exercitationem dolorum vel eos aspernatur voluptates ipsum eum explicabo.
            `,
        }, {
            src: img3,
            title: "孑遗千星——圣遗物",
            content: `推荐理由：兼具输出和辅助的配装。武器提高角色的输出和辅助能力。星之环激活时，全队角色可以通过圣痕三件套获得大量增益效果，进一步提高队伍整体输出。`,
        },
    ],
    pauseOnHover: true,
    autoplay: true,
    backgroundImage: true,
    interval: 5000,
    scaleRatio: 1.15,
    style: {
        height: "100vh",
        zIndex: 10,
        boxShadow: "0 5px 20px rgba(0,0,0,0.9)"
    }
}
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'react-fade-slider',
    component: Slider,
    args: { ...common, onChange: fn() },
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
        docs: {
            description: "*注意：默认的素材均为测试使用，版权归原作者所有，禁止用于商业用途！部分API为对象或jsx，无法使用表单展示，更多API请前往源代码查看"
        }
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes

    argTypes: {
        autoplay: { description: "自动播放" },
        interval: { description: "自动播放间隔(ms)" },
        scaleRatio: { description: "缩放比例" },
        pauseOnHover: { description: "鼠标悬停暂停" },
        backgroundImage: { description: "启用背景图片填充" },
        item: {
            control: {
                type: 'object'
            }
        },
        style: {
            control: {
                type: 'object'
            }
        },
        onChange: {
            description: "切换时回调，参数为当前索引",
            action: 'onChange'
        },

    }
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 默认: Story = {
    args: {
        ...common,
        onChange: fn()
    },
};
