import { Table, Tag, message, Spin, Anchor } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
    CheckCircleOutlined,
    ExclamationCircleOutlined,
} from '@ant-design/icons';

export default function BlackBox() {
    const [dataSource, setDatasource] = useState([]);
    const [websites, setWebsites] = useState([]);
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

        axios({
            url: 'https://blackbox.opentdp.org/api/sites',
        }).then(msg => {
            const lists = [];
            for (let i in msg.data) {
                lists.push(msg.data[i]);
            }
            // console.log(lists)
            setWebsites(lists);
        })
            .finally(() => {
                setLoad(false);
            })
            .catch(err => { message.error(err) });
    }

    function getTrafficStr(bytes) {
        if (bytes === 0) return 0;
        const k = 1024;
        const sizes = [
            "B",
            "KB",
            "MB",
            "GB",
            "TB",
            "PB",
            "EB",
            "ZB",
            "YB",
        ];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return (
            `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`
        );
    }

    useEffect(() => {
        fetchData()
        timer = setInterval(() => {
            fetchData();
        }, 10000);
    }, [])
    return (
        <>
            <div className='anchor'>
                <Anchor
                    direction="horizontal"
                    items={[{
                        key: '拨测节点',
                        href: '#boceNodes',
                        title: '拨测节点',
                    }, {
                        key: '已添加网站',
                        href: '#websites',
                        title: '已添加网站',
                    },]}
                />
            </div>
            <section id="boceNodes">
                <h1>OpenTDP 开放拨测集群</h1>
                <div>以下为注册到 OpenTDP Blackbox 服务的节点状态。了解更多请前往<a href="https://blackbox.opentdp.org/" target="_blank">https://blackbox.opentdp.org/</a></div>
                <Spin spinning={load}>
                    <Table dataSource={dataSource}
                        scroll={{
                            y: '80vh',
                        }}
                        columns={[{
                            title: '节点名',
                            key: 'name',
                            render: (num, record) => (
                                <b>{record.name}</b>
                            ),
                            fixed: 'left',
                            width: 130
                        }, {
                            title: '贡献者',
                            dataIndex: 'owner',
                            key: 'owner',
                            width: 130
                        }, {
                            title: '所在地',
                            dataIndex: 'region',
                            key: 'region',
                            width: 150
                        }, {
                            title: '版本',
                            key: 'version',
                            render: (num, record) => ("V" + record.version),
                            width: 60
                        }, {
                            title: '运营商',
                            dataIndex: 'isp',
                            key: 'isp',
                            width: 130
                        }, {
                            title: '入/出流量',
                            key: 'traffic',
                            render: (num, record) => (
                                <div>{getTrafficStr(record.todayTrafficIn)} / {getTrafficStr(record.todayTrafficOut)}</div>
                            ),
                            width: 130
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
                            },
                            width: 200
                        }, {
                            title: '备注',
                            dataIndex: 'banner',
                            key: 'banner',
                            width: 200
                        },]} />
                </Spin>
            </section>

            <section id="websites">
                <h1>已添加的网站</h1>
                <Spin spinning={load}>
                    <Table dataSource={websites}
                        scroll={{
                            y: '80vh',
                        }}
                        columns={[{
                            title: '站点名称',
                            key: 'websiteName',
                            render: (num, record) => (
                                <b>{record.labels.project}</b>
                            ),
                            fixed: 'left',
                            width: 130
                        }, {
                            title: '网址',
                            dataIndex: 'websiteUrl',
                            key: 'websiteUrl',
                            width: 130,
                            render: (num, record) => (record.targets.join(', '))
                        }, {
                            title: '备注',
                            dataIndex: 'region',
                            key: 'region',
                            width: 150,
                            render: (num, record) => (record.labels.desc)
                        },]} />
                </Spin>
            </section>

        </>
    )
}