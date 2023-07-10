import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import React, { useEffect, useState, lazy, Suspense } from 'react';
import Error from './error';
import {
  Layout, Menu, Watermark,
  Input, Typography, Row, Col, Divider, Space
}
  from 'antd';
import { GithubOutlined, GlobalOutlined } from '@ant-design/icons'
import { uuid } from './plug';
import Home from './Home';
import './App.css';
import Aegis from 'aegis-web-sdk';
import { ReactGPDemo } from './demo/nodejs/index';
const { Header, Content, Footer } = Layout;
const { TextArea } = Input;
const { Paragraph, Title } = Typography


function Main() {
  const navigate = useNavigate();

  return (
    <>
      {/* <Watermark content='Ar-Sr-Na 测试版本'> */}
      <Layout style={{ minHeight: '100vh' }}>
        <div className='nav-blur'>
          <img height="60" src={require('./icon.ico')} style={{ paddingRight: 5 }} alt="logo" />
          <span className='lead'>ArSrNa 资源与应用</span>
          <Menu mode="horizontal" defaultSelectedKeys="/" style={{ marginLeft: 30, background: 'rgba(0,0,0,0)' }}
            items={[{
              label: '首页',
              key: '/',
            },
            ]}
            onClick={(e) => navigate(e.key)}
          >
          </Menu>
        </div>
        <Content style={{ padding: '80px 20px 0px 20px' }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="*" element={<Error />} replace={true} />

            {/* Demos */}
            <Route path='demo/nodejs/react-genshin-progress' element={<ReactGPDemo />} />
          </Routes>
        </Content>
        <Footer>
          <FooterContent />
        </Footer>
      </Layout>

      {/* </Watermark > */}
    </>
  )
}

function FooterContent() {
  return (
    <>
      <Divider />
      <Row gutter={16}>
        <Col span={8}>
          <Space direction='vertical'>
            <Title level={4}>关于</Title>
            <a target="_blank" href='https://www.arsrna.cn/' rel='noreferrer'><GlobalOutlined /> Ar-Sr-Na 网站</a>
            <a target="_blank" href='https://www.arsrna.cn/communication/' rel='noreferrer'><GlobalOutlined /> 联系我们</a>
            <a target="_blank" href='https://github.com/ArSrNa/' rel='noreferrer'><GithubOutlined /> github</a>
            <a target="_blank" href='https://arsrna.coding.net/public/' rel='noreferrer'><GlobalOutlined /> Coding</a>
          </Space>
        </Col>

        <Col span={8}>
          <Space direction='vertical'>
            <Title level={4}>开发</Title>
            <a target="_blank" href='https://www.arsrna.cn/app/' rel='noreferrer'>资源与应用中心</a>
            <a target="_blank" href='https://ai.arsrna.cn/' rel='noreferrer'>AI 中心</a>
            <a target="_blank" href='https://live.arsrna.cn/' rel='noreferrer'>音视频</a>
          </Space>
        </Col>

        <Col span={8}>
          <Space direction='vertical'>
            <Title level={4}>更多</Title>
            <a target="_blank" href='https://www.arsrna.cn/' rel='noreferrer'>Ar-Sr-Na 博客</a>
            <a target="_blank" href='https://www.arsrna.cn/app/esrgan/' rel='noreferrer'>ESRGANUI 超分辨率</a>
            <a target="_blank" href='https://www.arsrna.cn/app/catch/' rel='noreferrer'>异步采集</a>
          </Space>
        </Col>
      </Row>
      <Paragraph style={{ paddingTop: 20, textAlign: 'center' }}>Powered by Ar-Sr-Na</Paragraph>
    </>
  )
}


function App() {
  // consoleDialog()
  const aegis = new Aegis({
    id: 'W7oejTaL4r0ek1Yg67', // 上报 id
    uin: `ArSrNaOS ${uuid()}`, // 用户唯一 ID（可选）
    reportApiSpeed: true, // 接口测速
    reportAssetSpeed: true, // 静态资源测速
    spa: true, // spa 应用页面跳转的时候开启 pv 计算
    hostUrl: 'https://rumt-zh.com'
  });
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;

