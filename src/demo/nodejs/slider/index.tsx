import { Button, Col, Divider, Flex, Row, Space } from "antd";
import Slider, { itemProps } from "react-fade-slider";
import "react-fade-slider/dist/index.css";
import style from "./index.module.scss";

import src1 from './images/16de7766a642388d21e4c76cacfde801_5165224128247218265.png'
import src2 from './images/5b60764dabc3bf50c2ad7b5ff8eae80b_2607687582866761407.png'
import src3 from './images/fa9fc6e9532e4c56c9ad0e5e9548a06a_2258061419554533859.png'
import { useState } from "react";
import { ProField, ProForm, ProFormCheckbox, ProFormDigit, ProFormField, ProFormGroup, ProFormList, ProFormSelect, ProFormText, ProFormTextArea } from "@ant-design/pro-components";
import { uuid } from "@/plug";

export default function App() {
    const item: itemProps[] = [
        {
            src: src1,
            title: "孑遗千星——星之环",
            content: "分野：无存之仪。特性：万有之星、界域共鸣、星影偕行、天渊易位",
        }, {
            src: src2,
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
            src: src3,
            title: "孑遗千星——圣遗物",
            content: `推荐理由：兼具输出和辅助的配装。武器提高角色的输出和辅助能力。星之环激活时，全队角色可以通过圣痕三件套获得大量增益效果，进一步提高队伍整体输出。`,
        },
    ];

    const [props, setProps] = useState<React.ComponentProps<typeof Slider>>({
        item,
        pauseOnHover: true,
        autoplay: true,
        backgroundImage: true,
        interval: 5000,
        scaleRatio: 1.15,
        style: {
            height: "50vh",
            position: "sticky",
            top: 80,
            zIndex: 10,
            boxShadow: "0 5px 20px rgba(0,0,0,0.9)"
        }
    })



    return (
        <>

            <div style={{ position: 'sticky', top: 60, zIndex: 2, background: 'red' }}>
                *注意：默认的素材均为测试使用，版权归原作者所有，禁止用于商业用途！
            </div>
            <Slider {...props} />

            <h1>API</h1>

            <div style={{ marginBlock: 30 }}>部分API为对象或jsx，无法使用表单展示，更多API请前往源代码<a href='https://cnb.cool/arsrna/os/react-fade-slider' target='_blank'>https://cnb.cool/arsrna/os/react-fade-slider</a>查看</div>

            <ProForm
                initialValues={props}
                onValuesChange={(newV, e) => {
                    setProps(prev => ({
                        ...prev,
                        ...e,
                        style: { ...prev.style, ...e.style }
                    }))
                }}>
                <Row gutter={32}>
                    <Col sm={24} xl={12}>
                        {Object.keys(props.style).map(key => (<div>
                            <ProFormText name={["style", key]} label={`container css属性：${key}`} />
                        </div>))}
                        <Divider />

                        <ProFormCheckbox name="autoplay" label="自动播放" />
                        <ProFormDigit name="interval" label="自动播放间隔(ms)" />
                        <ProFormDigit name="scaleRatio" label="缩放比例" fieldProps={{ step: 0.01 }} />
                        <ProFormCheckbox name="pauseOnHover" label="鼠标悬停暂停" />
                        <ProFormCheckbox name="backgroundImage" label="启用背景图片填充" />
                    </Col>

                    <Col sm={24} xl={12}>
                        <b>由于内容为jsx，在这里只能展示string，请前往源代码查看</b>
                        <ProFormList
                            containerStyle={{ width: "100%" }}
                            name="item"
                            creatorRecord={{
                                src: src1,
                                title: "title" + uuid(),
                                content: "content" + uuid()
                            }}
                        >
                            <Flex>
                                <ProFormTextArea name="src" label="图片地址" />
                                <ProFormTextArea name="title" label="标题" />
                                <ProFormTextArea name="content" label="内容" />
                            </Flex>
                        </ProFormList>

                    </Col>
                </Row>
            </ProForm >
        </ >
    );
}