import { createLrcObj } from 'react-lrcplayer';
import { Citlali, Direidyth, Gaming, Hutao, Kaeya, Lumine, Skirk } from './assets';
import { imgUrl } from './utils';

const lyrics = createLrcObj(`[00:00.000] 作词 : ChiliChill
[00:01.000] 作曲 : ChiliChill
[00:02.000] 制作人 : ChiliChill
[00:10.473]船 摇啊摇
[00:12.239]摇到陌生的远方摇断了船桨
[00:16.087]进土壤 长成了愿望和新故乡
[00:20.342](Bora sana, Bora sana)
[00:20.724]我的朋友
[00:22.759]你在哪 是否凝望同一轮月光
[00:26.474]有没有 成为期待的英雄模样
[00:30.752]期待的模样
[00:40.368](Nzuri Sana)
[00:41.777]风 绕啊绕
[00:43.573]绕成年轮记录西山来的歌谣
[00:47.421]轻唱着 十八万个寂静的夜色
[00:51.631]
[00:52.178]我的朋友
[00:53.929]若岁月是一条能够逆流的河
[00:57.787]你是否 还会踏上未知的远走
[01:02.323]
[01:02.675]Hakunamatata my friend
[01:05.085]层岩上雕刻着你的画
[01:07.563]Hakunamatata my friend
[01:10.766]庆贺的佳酿千里飘香
[01:12.859]Latata!Latata!
[01:15.270]从风花到雪月 从东南到北呀
[01:18.163]地脉记录着你传奇的诗篇到永远 永远
[01:23.190]
[01:23.543]船 摇啊摇
[01:25.280]摇到太阳下班月儿挂树梢
[01:29.033]歇歇脚 默念早睡早起身体好
[01:33.814]我的朋友
[01:35.690]要是累了病了找我瞧一瞧
[01:39.508]不得了 三丘丘快采药让四丘丘熬
[01:43.950]
[01:44.436]Hakunamatata my friend
[01:46.860]森林里传来可爱回响
[01:49.324]Hakunamatata my friend
[01:52.006]见你点燃勇敢的火把
[01:54.721]Latata!Latata!
[01:57.026]从桓那兰那到欧庇克莱呀
[01:59.814]地脉记录着你传奇的诗篇到永远 永远
[02:07.237]永远…
[02:17.056]
[02:18.250]船 摇啊摇
[02:20.144]摇到陌生的远方摇断了船桨
[02:24.195]进土壤 长成了愿望和新故乡
[02:28.982]我的朋友
[02:31.328]你在哪 是否凝望同一轮月光
[02:35.184]有没有…
[02:38.164]
[02:42.578]Hakunamatata my friend
[02:47.782]船 摇啊摇
[02:49.518]摇到陌生的远方摇断了船桨
[02:53.422]进土壤 长成了愿望和新故乡
[02:57.966]我的朋友
[02:59.935]你在哪 是否凝望同一轮月光
[03:03.714]有没有 成为期待的英雄模样
[03:08.102]
[03:08.666]船 摇啊摇 摇啊摇啊摇啊摇
[03:13.865]风 绕啊绕 绕啊绕啊绕啊绕
[03:18.731]
[03:19.098]我的朋友
[03:20.951]请带走这一首歌
[03:24.127]去更远的远方…
[03:29.063]
[03:29.980]
[03:32.466] 音乐制作 : ChiliChill
[03:33.299] 笛子 : Akshat Mehrotra
[03:34.132] 上海录音 : ChiliChill@Staff Only Studio
[03:34.965] 北京录音 : Kevin刘瀚文@Studio21A
[03:35.798] 混音 : ChiliChill
[03:36.631] 母带 : Joe LaPorta
`);

const characters = [{
    name: '荧', cv: '宴宁', img: imgUrl(Lumine), color: '#EEDCA2'
}, {
    name: '茜特菈莉', cv: '柳知萧', img: imgUrl(Citlali), color: '#B986AE'
}, {
    name: '丝柯克', cv: '谢莹', img: imgUrl(Skirk), color: '#2B3882'
}, {
    name: '嘉明', cv: '谢莹', img: imgUrl(Gaming), color: '#611E10'
}, {
    name: '胡桃', cv: '陶典', img: imgUrl(Hutao), color: '#ECB79A'
}, {
    name: '蒂莱尔', cv: '闫夜桥', img: imgUrl(Direidyth), color: '#253B64'
}, {
    name: '凯亚', cv: '孙晔', img: imgUrl(Kaeya), color: '#456886'
}];

const characterOrder: { time: number, characters: number[]; }[] = createLrcObj(`[00:00.000][]
[00:10.473][0]
[00:30.752][1]
[00:40.368][0,1,2,3,4,5,6]
[00:41.777][1]
[00:52.178][2]
[01:02.675][0,1,2,3,4,5,6]
[01:05.085][3]
[01:07.563][0,1,2,3,4,5,6]
[01:10.266][3]
[01:12.859][0,1,2,3,4,5,6]
[01:15.270][3]
[01:23.543][4]
[01:44.436][0,1,2,3,4,5,6]
[01:46.860][6]
[01:49.324][0,1,2,3,4,5,6]
[01:52.006][6]
[01:54.721][0,1,2,3,4,5,6]
[01:57.026][6]
[02:07.237][5]
[02:38.164][]
[02:42.578][0,1,2,3,4,5,6]
[02:47.782][0]
[03:29.063][]`).filter(item => item.c.trim() !== '').map(item => ({
    time: item.t,
    characters: JSON.parse(item.c)
}));

export const data = [{
    time: 0,
    content: "无歌词"
},
{
    "time": 10.473,
    "content": "船 摇啊摇"
},
{
    "time": 12.239,
    "content": "摇到陌生的远方摇断了船桨"
},
{
    "time": [16.087, 20.724],
    "content": "进土壤 长成了愿望和新故乡"
},
{
    "time": [20, 22.759],
    "content": "Bora sana, Bora sana"
},
{
    "time": [20.724, 22.759],
    "content": "我的朋友"
},
{
    "time": 22.759,
    "content": "你在哪 是否凝望同一轮月光"
},
{
    "time": 26.474,
    "content": "有没有 成为期待的英雄模样"
},
{
    "time": 30.752,
    "content": "期待的模样"
},
{
    "time": 40.368,
    "content": "(Nzuri Sana)"
},
{
    "time": 41.777,
    "content": "风 绕啊绕",
    "level": 1
},
{
    "time": 43.573,
    "content": "绕成年轮记录西山来的歌谣",
    "level": 1
},
{
    "time": [47.421, 51.631],
    "content": "轻唱着 十八万个寂静的夜色",
    "level": 1
},
{
    "time": 52.178,
    "content": "我的朋友"
},
{
    "time": 53.929,
    "content": "若岁月是一条能够逆流的河"
},
{
    "time": [57.787, 62.323],
    "content": "你是否 还会踏上未知的远走"
},
{
    "time": 62.675,
    "content": "Hakunamatata my friend",
    "style": {
        backgroundImage: "linear-gradient(90deg, rgb(255, 205, 200) 0%, rgb(120, 20, 255) 100%)",
    }
},
{
    "time": 65.085,
    "content": "层岩上雕刻着你的画",
    level: 1
},
{
    "time": 67.563,
    "content": "Hakunamatata my friend",
    "style": {
        backgroundImage: "linear-gradient(90deg, rgba(0, 60, 255, 1) 0%, rgb(120, 20, 255) 100%)",
        color: "white"
    }
},
{
    "time": 70.766,
    "content": "庆贺的佳酿千里飘香",
    level: 1
},
{
    "time": 72.859,
    "content": "Latata!Latata!"
},
{
    "time": 75.27,
    "content": "从风花到雪月 从东南到北呀",
    level: 1
},
{
    "time": 78.163,
    "content": "地脉记录着你传奇的诗篇到永远 永远",
    level: 1
},
{
    "time": 83.543,
    "content": "船 摇啊摇"
},
{
    "time": 85.28,
    "content": "摇到太阳下班月儿挂树梢"
},
{
    "time": 89.033,
    "content": "歇歇脚 默念早睡早起身体好"
},
{
    "time": 93.814,
    "content": "我的朋友"
},
{
    "time": 95.69,
    "content": "要是累了病了找我瞧一瞧"
},
{
    "time": 99.5,
    "content": "不得了 三丘丘快采药让四丘丘熬"
},
{
    "time": 104.436,
    "content": "Hakunamatata my friend"
},
{
    "time": 106.86,
    "content": "森林里传来可爱回响",
    level: 1
},
{
    "time": 109.324,
    "content": "Hakunamatata my friend"
},
{
    "time": 112.006,
    "content": "见你点燃勇敢的火把",
    level: 1
},
{
    "time": 114.721,
    "content": "Latata!Latata!"
},
{
    "time": 117.02600000000001,
    "content": "从桓那兰那到欧庇克莱呀",
    level: 1
},
{
    "time": 119.814,
    "content": "地脉记录着你传奇的诗篇到永远 永远",
    level: 1
},
{
    "time": 127.237,
    "content": "永远…"
},
{
    "time": 132.056,
    "content": ""
},
{
    "time": 138.25,
    "content": "船 摇啊摇"
},
{
    "time": 140.144,
    "content": "摇到陌生的远方摇断了船桨"
},
{
    "time": 144.195,
    "content": "进土壤 长成了愿望和新故乡"
},
{
    "time": 148.982,
    "content": "我的朋友"
},
{
    "time": 151.328,
    "content": "你在哪 是否凝望同一轮月光"
},
{
    "time": [155.184, 158.164],
    "content": "有没有…"
},
{
    "time": 162.578,
    "content": "Hakunamatata my friend",
},
{
    "time": 167.78199999999998,
    "content": "船 摇啊摇"
},
{
    "time": 169.518,
    "content": "摇到陌生的远方摇断了船桨"
},
{
    "time": [173.422, 177.966],
    "content": "进土壤 长成了愿望和新故乡"
},
{
    "time": [177.84, 180.5],
    "content": "Bora sana, Bora sana",
},
{
    "time": 177.966,
    "content": "我的朋友"
},
{
    "time": 179.935,
    "content": "你在哪 是否凝望同一轮月光"
},
{
    "time": 183.714,
    "content": "有没有 成为期待的英雄模样"
},
{
    "time": 188.102,
    "content": ""
},
{
    "time": 188.666,
    "content": "船 摇啊摇 摇啊摇啊摇啊摇"
},
{
    "time": 193.865,
    "content": "风 绕啊绕 绕啊绕啊绕啊绕",
},
{
    "time": 198.731,
    "content": ""
},
{
    "time": 199.098,
    "content": "我的朋友"
},
{
    "time": 200.951,
    "content": "请带走这一首歌"
},
{
    "time": 204.127,
    "content": "去更远的远方…"
},
{
    "time": 209.063,
    "content": ""
},
{
    "time": 209.98,
    "content": ""
},
{
    "time": 212.466,
    "content": " 音乐制作 : ChiliChill"
},
{
    "time": 213.299,
    "content": " 笛子 : Akshat Mehrotra"
},
{
    "time": 214.132,
    "content": " 上海录音 : ChiliChill@Staff Only Studio"
},
{
    "time": 214.965,
    "content": " 北京录音 : Kevin刘瀚文@Studio21A"
},
{
    "time": 215.798,
    "content": " 混音 : ChiliChill"
},
{
    "time": 216.631,
    "content": " 母带 : Joe LaPorta"
}
]

export const order = [
    {
        "time": 0,
        "characters": []
    },
    {
        "time": 10.473,
        "characters": [
            0
        ]
    },
    {
        "time": 30.752,
        "characters": [
            1
        ]
    },
    {
        "time": 40.368,
        "characters": [
            0,
            1,
            2,
            3,
            4,
            5,
            6
        ]
    },
    {
        "time": 41.777,
        "characters": [
            1
        ]
    },
    {
        "time": 52.178,
        "characters": [
            2
        ]
    },
    {
        "time": 62.675,
        "characters": [
            0,
            1,
            2,
            3,
            4,
            5,
            6
        ]
    },
    {
        "time": 65.085,
        "characters": [
            3
        ]
    },
    {
        "time": 67.563,
        "characters": [
            0,
            1,
            2,
            3,
            4,
            5,
            6
        ]
    },
    {
        "time": 70.766,
        "characters": [
            3
        ]
    },
    {
        "time": 83.543,
        "characters": [
            4
        ]
    },
    {
        "time": 104.436,
        "characters": [
            0,
            1,
            2,
            3,
            4,
            5,
            6
        ]
    },
    {
        "time": 106.86,
        "characters": [
            6
        ]
    },
    {
        "time": 109.324,
        "characters": [
            0,
            1,
            2,
            3,
            4,
            5,
            6
        ]
    },
    {
        "time": 112.006,
        "characters": [
            6
        ]
    },
    {
        "time": 114.721,
        "characters": [
            0,
            1,
            2,
            3,
            4,
            5,
            6
        ]
    },
    {
        "time": 117.02600000000001,
        "characters": [
            6
        ]
    },
    {
        "time": 127.237,
        "characters": [
            5
        ]
    },
    {
        "time": 158.164,
        "characters": []
    },
    {
        "time": 162.578,
        "characters": [
            0,
            1,
            2,
            3,
            4,
            5,
            6
        ]
    },
    {
        "time": 167.78199999999998,
        "characters": [
            0
        ]
    },
    {
        "time": 209.063,
        "characters": []
    }
]


export default {
    lyrics,
    data,
    characters,
    characterOrder
}

