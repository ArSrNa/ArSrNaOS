import { Table, Tag, message, Spin } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
    CheckCircleOutlined,
    ExclamationCircleOutlined,
} from '@ant-design/icons';

export default function BlackBox() {
    const [dataSource, setDatasource] = useState([]);
    const [load, setLoad] = useState(true);
    let timer;

    function fetchData() {
        axios({
            url: 'https://blackbox.opentdp.org/api/nodes',
            type: 'get'
        }).then(msg => {
            const lists = [];
            for (let i in msg.data) {
                lists.push(msg.data[i]);
            }
            setDatasource(lists);
        })
            .finally(() => {
                setLoad(false);
            })
            .catch(err => { message.error(err) });
    }

    useEffect(() => {
        fetchData()
        timer = setInterval(() => {
            fetchData();
        }, 10000);
    }, [])
    return (
        <>
            <h1>OpenTDP 开放拨测集群</h1>
            <div>以下为注册到 OpenTDP Blackbox 服务的节点状态。了解更多请前往<a href="https://blackbox.opentdp.org/status/" target="_blank">https://blackbox.opentdp.org/status/</a></div>
            <Spin spinning={load}>
                <Table dataSource={dataSource} columns={[{
                    title: '节点名',
                    key: 'name',
                    render: (num, record) => (
                        <b>{record.name}</b>
                    )
                }, {
                    title: '贡献者',
                    dataIndex: 'owner',
                    key: 'owner',
                }, {
                    title: '所在地',
                    dataIndex: 'region',
                    key: 'region',
                }, {
                    title: '运营商',
                    dataIndex: 'isp',
                    key: 'isp',
                }, {
                    title: '入/出流量',
                    key: 'traffic',
                    render: (num, record) => (
                        <div>{record.todayTrafficIn} / {record.todayTrafficOut}</div>
                    )
                }, {
                    title: '状态',
                    key: 'status',
                    render: (num, record) => {
                        const online = record.status === 'online';
                        return (<>
                            <Tag
                                icon={online ? <CheckCircleOutlined /> : <ExclamationCircleOutlined />}
                                color={online ? 'green' : 'red'}>
                                {online ? '在线' : '离线'}
                            </Tag>
                            <div>
                                <small>上次启动时间：{record.lastStartTime}</small><br />
                                <small>上次离线时间：{record.lastCloseTime || '暂无记录'}</small>
                            </div>
                        </>)
                    }
                }, {
                    title: '备注',
                    dataIndex: 'banner',
                    key: 'banner',
                },]} />
            </Spin>

            <div>
                <h2>注册须知</h2>
                <p>这将通过 Frp Client 注册一个 Blackbox 节点到 OpenTDP Blackbox 服务，运行前请确认知晓自己在做什么。 </p><ul><li>目前仅用于测试，请不要在生产环境中使用</li><li>你的节点将分享给其他注册节点的用户</li><li>你将可以使用其他用户注册的节点</li></ul><h2>注册你的节点</h2><p>修改环境变量后运行如下命令，注册你的节点到 OpenTDP Blackbox 服务。</p><p>参数 <b>--publish 9115:9115</b> 并不是必须的，这取决于该节点是否仍需要为其它 Prometheus 提供服务，如果不需要请删除它。</p>
                <pre><code>
                    docker run -d \<br />
                    --name blackbox \<br />
                    --restart always \<br />
                    --publish 9115:9115 \<br />
                    --env "NODE_NAME=your-node-name" \<br />
                    --env "NODE_OWNER=your-nickname" \<br />
                    --env "NODE_REGION=your-city" \<br />
                    --env "NODE_ISP=your-isp" \<br />
                    --env "NODE_BANNER=your-banner" \<br />
                    rehiy/blackbox<br />
                    <br />
                    # 查看注册日志<br />
                    docker logs -f blackbox
                </code></pre>
                <h2>环境变量说明</h2>
                <p>请不要在环境变量中添加`;`或其他特殊字符，否则可能导致无法正常运行。</p>
                <ul>
                    <li><b>NODE_NAME</b>：以自己英文名开头，仅支持英文小写、短横线、数字（不超过20byte）</li>
                    <li><b>NODE_OWNER</b>：所有者昵称（utf-8编码，不超过30byte）</li>
                    <li><b>NODE_REGION</b>：国家或地区/省份/城市（utf-8编码，不超过30byte）</li>
                    <li><b>NODE_ISP</b>：运营商/云厂商（utf-8编码，不超过30byte）</li>
                    <li><b>NODE_BANNER</b>：自定义说明（utf-8编码，不超过30byte）</li>
                </ul>
            </div>

        </>
    )
}