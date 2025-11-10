import type { Meta, StoryObj } from '@storybook/nextjs';
import { useArgs } from 'storybook/preview-api'

import Component from 'poster-generator';
import style from './index.module.scss';
import "poster-generator/dist/index.css";

import { ComponentProps } from 'react';

const common: ComponentProps<typeof Component> = {
    src: '/demo_res/cover-generator/a8ccb573aeb231c14a84a3c7ea7364431550564.jpg',
    height: '350px',
    content: (<div className={style['content']}>
        <h1>强势动力来自</h1>
        <div>
            <div className={style['content-mask']} /><span>CNB</span></div>
    </div>),
    backgroundStyle: {
        "backgroundSize": "60vw",
        "backgroundPosition": "-69% 5%"
    },
    filter: {
        mask: `blur(20px) brightness(1)`,
        background: ''
    },
    range: [0.69, 0.2],
    scale: 1.1,
    test: true,
}
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'poster-generator',
    component: Component,
    args: common,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
        docs: {
            description: {
                component: '本项目复刻原神加载时的元素进度条，使用React与babel开发，仅在vite、next上通过使用测试。以下是基本使用示例。'
            }
        }
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        range: {
            description: "blur渐变模糊范围，数组值表示模糊到清晰过渡范围在 [0]和[1]之间，[0]之前模糊，[1]之后清晰",
        },
        height: {
            description: "图片高度，默认300px"
        },
        contentStyle: {
            description: '叠层内容样式，通过修改 --text-linear-gradient 变量可以实现渐变调节，修改top和left属性可以实现位移'
        },
        content: {
            description: "叠层内容（传入jsx对象，此处不支持修改）"
        },
        src: {
            description: "图片地址"
        }
    }
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 默认: Story = {
    args: common,
};

export const 全屏: Story = {
    args: {
        ...common, backgroundStyle: {
            backgroundSize: '110vw',
            backgroundPosition: '-69px 5%'
        }
    },
};