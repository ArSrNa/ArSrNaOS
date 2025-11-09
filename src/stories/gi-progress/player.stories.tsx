import type { Meta, StoryObj } from '@storybook/nextjs';

import { GIProgress } from "genshin-progress";
import { ComponentProps, useEffect, useState } from 'react';

const common: ComponentProps<typeof GIProgress> = {
    width: 400,
    num: 93,
    progressStyle: {
    },
    backgroundStyle: {
    }
}
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'React/原神元素进度条',
    component: GIProgress,
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
        width: {
            type: "number",
            description: "进度条宽度",
            control: {
                type: "range",
                min: 100,
                max: 1000
            }
        },
        num: {
            type: "number",
            description: "进度条进度",
            control: {
                type: 'range',
                min: 0,
                max: 100
            }
        },
        progressStyle: {
            description: "进度条样式",
            control: {
                type: "object",
            }
        },
        backgroundStyle: {
            description: "背景样式",
            control: {
                type: "object",
            }
        }
    }
} satisfies Meta<typeof GIProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const 真实的进度条: Story = {
    args: {
        ...common,
    },
    render: () => {
        const [num, setNum] = useState(0);
        function play() {
            setNum(0)
            setTimeout(() => setNum(6), 500);
            setTimeout(() => setNum(20), 1000);
            setTimeout(() => setNum(25), 1200);
            setTimeout(() => setNum(40), 1400);
            setTimeout(() => setNum(50), 1500);
            setTimeout(() => setNum(70), 1800);
            setTimeout(() => setNum(90), 2000);
            setTimeout(() => setNum(93), 2100);
            setTimeout(() => setNum(100), 5000);
        }

        return <div>
            <button onClick={play} disabled={num !== 100 && num !== 0}>播放</button>
            num: {num}
            <GIProgress num={num} width={400} />
        </div>
    },
    parameters: {
        docs: {
            description: {
                story: '如果加载得太顺，就没那感觉了，必须卡岩，而卡岩正好是`num={93}`的时候'
            }
        }
    }
};

export const 更真实的进度条: Story = {
    args: { ...common },
    render: () => {
        const [num, setNum] = useState(0);

        const handleClick = () => {
            var i = 0
            var int = setInterval(() => {
                if (i >= 100) { clearInterval(int); return }
                i += 5;
                setNum(i);
            }, 300);
        }

        const mapValue = (input) => {
            if (input >= 0 && input <= 30) {
                // 输入范围 [0, 30]
                const output = (input / 30) * 93;
                return output
            } else if (input > 30 && input < 100) {
                // 输入 30
                return 93
            } else if (input >= 100) {
                // 输入 100
                return 100
            }
        }
        return (<>
            <button onClick={handleClick} disabled={num !== 100 && num !== 0}>播放动画</button>
            传入:{num}
            <br />实际传入:{mapValue(num)}
            <GIProgress num={mapValue(num)} width={400} />
        </>);
    },
    parameters: {
        docs: {
            description: {
                story: `实际业务我们并不能控制值卡在93，所以就需要一个映射算法来重映射这些数字，当传入[0,30]的时候，等比输出[0,93]；输入(10,100)的时候输出93；输入100的时候，输出100`,
            },
        },
    }
}