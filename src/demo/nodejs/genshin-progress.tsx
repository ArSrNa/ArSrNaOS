import { Space, Card, Button, Image, Avatar, Typography, Anchor, Row, Col, Input, InputNumber, Slider, Divider } from 'antd';
import { useEffect, useState } from 'react';
import { GIProgress } from "genshin-progress";
import hljs from 'highlight.js'
import 'highlight.js/styles/vs2015.css';
import javascript from 'highlight.js/lib/languages/javascript';
import { useRecoilValue } from 'recoil';
import { screenWidthState } from '@/states';
hljs.registerLanguage('javascript', javascript);
const { Meta } = Card;
const { Title, Paragraph } = Typography;
const { TextArea } = Input

export function ReactGPDemo() {
    const screenWidth = useRecoilValue(screenWidthState);
    const [progress, setProgress] = useState(0);
    const [width, setWidth] = useState(300);


    //高亮html
    useEffect(() => {
        // 配置 highlight.js
        // hljs.configure({
        //     // 忽略未经转义的 HTML 字符
        //     ignoreUnescapedHTML: true
        // })
        // 获取到内容中所有的code标签
        const codes = document.querySelectorAll('pre code')
        codes.forEach((el) => {
            //@ts-ignore 让code进行高亮
            hljs.highlightElement(el);
        })
    }, [])

    return (
        <Row>
            <Col md={4}>
                <Anchor
                    affix={screenWidth > 768}
                    offsetTop={120}
                    items={[{
                        key: '基本使用',
                        href: '#base',
                        title: '基本使用',
                    }, {
                        key: '尝试一下',
                        href: '#try',
                        title: '尝试一下',
                        children: [{
                            key: '更改进度',
                            title: '更改进度',
                            href: '#changeProgress'
                        }, {
                            key: '改变宽度',
                            title: '改变宽度',
                            href: '#changeWidth'
                        }],
                    }, {
                        title: '真实的进度条',
                        key: '真实的进度条',
                        href: '#true'
                    }, {
                        title: '更真实的进度条',
                        key: '更真实的进度条',
                        href: '#true2'
                    }]}
                />
            </Col>

            <Col md={20}>
                <Space direction='vertical' size="middle">
                    <section id='base'>
                        <Title>React，启动！</Title>
                        <Paragraph>本项目复刻原神加载时的元素进度条，使用React与babel开发，仅在babel上通过使用测试。以下是基本使用示例。</Paragraph>
                        <GIProgress num={93} width={400} />
                        <pre>
                            <code>{`import { GIProgress } from "genshin-progress";\nreturn(<GIProgress num={93} width={400} />)`}</code>
                        </pre>
                    </section>



                    <Title id='try'>Have a try</Title>

                    <section id='changeProgress'>
                        <Title level={2}>更改进度</Title>
                        <Slider max={100} min={0} onChange={setProgress} />
                        <GIProgress num={progress} width={400} />
                        <pre>
                            <code>{`import { GIProgress } from "genshin-progress";
const [progress,setProgress]=useState(0);
<Slider max={100} min={0} onChange={setProgress} /> //import {Slider} from 'antd'
return(<GIProgress num={progress} width={400} />);
`}</code>
                        </pre>
                    </section>

                    <Divider />
                    <section id='changeWidth'>
                        <Title level={2}>更改宽度</Title>
                        <Slider max={window.innerWidth} min={100} onChange={setWidth} />
                        <GIProgress num={93} width={width} />
                        <pre>
                            <code>{`import { GIProgress } from "genshin-progress";
const [width,setWidth]=useState(0);
<Slider max={window.innerWidth} min={300} onChange={setWidth} /> //import {Slider} from 'antd'
return(<GIProgress num={93} width={width} />);
`}</code>
                        </pre>
                    </section>

                    <Divider />
                    <section id='true'>
                        <FuckingProgress />
                    </section>

                    <section id='true2'>
                        <FuckingTrueProgress />
                    </section>

                </Space>
            </Col>
        </Row>
    )
}

function FuckingProgress() {
    const [num, setNum] = useState(0);
    const handleClick = () => {
        setTimeout(() => setNum(6), 500);
        setTimeout(() => setNum(20), 1000);
        setTimeout(() => setNum(25), 1200);
        setTimeout(() => setNum(40), 1400);
        setTimeout(() => setNum(50), 1500);
        setTimeout(() => setNum(70), 1800);
        setTimeout(() => setNum(90), 2000);
        setTimeout(() => setNum(93), 2100);
        setTimeout(() => setNum(100), 5000);
    };
    return (<>
        <Title>真实的进度条</Title>
        <Paragraph>如果加载得太顺，就没那感觉了，必须卡岩，而卡岩正好是<code>{`num={93}`}</code>的时候</Paragraph>
        <Button onClick={handleClick}>播放动画</Button>
        <GIProgress num={num} width={600} />
        进度:{num}
        <pre>
            <code>{`
            const [num, setNum] = useState(0);
            const handleClick = () => {
                setTimeout(() => setNum(6), 500);
                setTimeout(() => setNum(20), 1000);
                setTimeout(() => setNum(25), 1200);
                setTimeout(() => setNum(40), 1400);
                setTimeout(() => setNum(50), 1500);
                setTimeout(() => setNum(70), 1800);
                setTimeout(() => setNum(90), 2000);
                setTimeout(() => setNum(93), 2100);
                setTimeout(() => setNum(100), 5000);
            };
            return(<>
                <Button onClick={handleClick}>播放动画</Button>
                <GIProgress num={num} width={600} />
                进度:{num}
            </>)
            `.replaceAll('            ', '')}</code>
        </pre>
    </>);
}

function FuckingTrueProgress() {
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
        <Title>更真实的进度条</Title>
        <Paragraph>实际业务我们并不能控制值卡在93，所以就需要一个映射算法来重映射这些数字，</Paragraph>
        <Paragraph>{`当传入[0,30]的时候，等比输出[0,93]；输入(10,100)的时候输出93；\n输入100的时候，输出100`}</Paragraph>

        <Slider max={100} min={0} value={num} onChange={setNum} />
        <Button type='primary' onClick={handleClick}>播放动画</Button>
        <GIProgress num={mapValue(num)} width={600} />
        传入:{num}
        <br />实际传入:{mapValue(num)}
        <pre>
            <code>{`
            const [num, setNum] = useState(0);
            const mapValue = (input) => {
                if (input >= 0 && input <= 30) {
                    // 输入范围 [0, 10]
                    const output = (input / 30) * 93;
                    return output
                } else if (input > 30 && input < 100) {
                    // 输入范围 (10, 100]
                    return 93
                } else if (input == 100) {
                    // 输入范围 (10, 100]
                    return 100
                }
            }
            return(<>
                <Slider max={100} min={0} onChange={setNum} />
                <GIProgress num={mapValue(num)} width={600} />
            </>)
            `.replaceAll('            ', '')}</code>
        </pre>
    </>);
}