import Component from 'poster-generator';
import styles from './index.module.scss';
import "poster-generator/dist/index.css";

import { useState } from 'react';
import { Form, Input, Row, Col } from 'antd';
import { ProForm, ProFormDigit, ProFormSlider, ProFormSwitch, ProFormText } from '@ant-design/pro-components';


export default function Slider() {
  const [props, setProps] = useState<React.ComponentProps<typeof Component> & { text?: string, text2?: React.ReactNode; }>({
    src: '/demo_res/cover-generator/a8ccb573aeb231c14a84a3c7ea7364431550564.jpg',
    height: '350px',
    backgroundStyle: {
      backgroundSize: '130vw',
      backgroundPosition: '-69px 5%'
    },
    filter: {
      mask: `blur(20px) brightness(1)`,
      background: ''
    },
    range: [0.2, 0.69],
    scale: 1.1,
    test: true,
  });


  const { range: r } = props;

  return (
    <>
      <Component src={props.src}
        {...props}
        range={[r[1], r[0]]}
        content={<Content title={props.text} content={props.text2} />} />


      <ProForm initialValues={props}
        layout="vertical"
        onValuesChange={(changed, e) => {
          setProps(prev => ({
            ...prev,
            ...e,
          }));
        }}>
        <div>更多API请前往源代码<a href='https://cnb.cool/arsrna/os/cover-generator' target='_blank'>https://cnb.cool/arsrna/os/cover-generator</a>查看
        </div>
        <Row gutter={32}>
          <Col lg={12} sm={24}>
            <h1>前景/文字设置</h1>
            <ProFormSwitch name='test' label="打开遮罩测试图例" />
            <ProFormText name='height' label="高度(css单位)" />
            <ProFormDigit name="scale" label="整体缩放" fieldProps={{ step: 0.01 }} />
            <ProFormText name='text' label="第一行文字（非组件自带，请查找Content组件和scss定义）" />
            <ProFormText name='text2' label="第二行文字（非组件自带，请查找Content组件和scss定义）" />

          </Col>
          <Col lg={12} sm={24}>
            <h1>图片/背景设置</h1>
            <ProFormSlider name='range'
              fieldProps={{
                reverse: true
              }}
              label="模糊过渡范围"
              range
              min={0}
              max={1}
              step={0.01} />

            <Form.Item name={["filter", "mask"]} label="遮罩滤镜效果(CSSProperties.filter)">
              <Input />
            </Form.Item>

            <Form.Item name={["backgroundStyle", "backgroundPosition"]} label="背景位移">
              <Input />
            </Form.Item>

            <Form.Item name={["backgroundStyle", "backgroundSize"]} label="背景大小(css单位)">
              <Input />
            </Form.Item>
          </Col>

        </Row>
      </ProForm>

    </>
  );
}

function Content({ title, content }) {
  return <div className={styles['content']}>
    <h1>{title || "强势动力来自"}</h1>
    <div>
      {<>{!content && <div className='content-mask' />}
        <span>{content || "CNB"}</span></>}
    </div>
  </div>;
}

