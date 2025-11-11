import { LrcObj } from "react-lrcplayer";

export function getDuration(timeline: number[], i: number) {
    if (i === timeline.length - 1) {
        return timeline[i] - timeline[i - 1];
    } else {
        return timeline[i + 1] - timeline[i];
    }
}

export const imgUrl = (v: unknown) => (typeof v === 'string' ? v : (v as any).src);


export function transformLineLrc(lrc: LrcObj[]) {
    const res = lrc.map((m, i) => {
        const str = m.c;
        // 正则匹配：先匹配时间（<...>），再匹配后续文字（非<开头的内容）
        const regex = /<(\d+:\d+\.\d+)>([^<]+)/g;
        const result: { time: number; content: string }[] = [];
        let match: RegExpExecArray | null;

        while ((match = regex.exec(str)) !== null) {
            const timeStr = match[1]; // 时间字符串（如 "00:10.41"）
            const text = match[2].trim(); // 文字内容（去除前后空格）

            // 时间转秒
            const [minutes, seconds] = timeStr.split(':');
            const totalSeconds = Number(minutes) * 60 + Number(seconds);
            result.push({
                time: totalSeconds, // 转换后的秒数
                content: text,
            });
        }
        return {
            content: m.c,
            time: m.t,
            line: result
        };
    });
    return res;
}

export function transformL2Lrc(lrc: LrcObj[]) {
    return lrc.map(m => {
        // 先移除末尾可能的下划线，再按下划线拆分
        const parts = m.c.replace(/_$/, '').split('_');
        const result: {
            time: number;
            content: string;
        }[] = [];
        // 每两个元素一组（文本+数字），生成对象
        for (let i = 0; i < parts.length; i += 2) {
            // 确保有对应的数字部分才添加
            if (parts[i + 1] !== undefined) {
                result.push({
                    time: m.t + Number(parts[i + 1]) / 100, // 数字部分作为t
                    content: parts[i]              // 文本部分作为c
                });
            }
        }
        return {
            time: m.t, content: m.c, line: result
        };
    })
}

/**
 * 从数组中获取以索引为中心、n为半径的元素范围
 * @param {Array} arr - 目标数组
 * @param {number} centerIndex - 中心索引
 * @param {number} n - 半径（前后各取n个元素）
 * @returns {Array} 范围内的元素数组
 */
export function getRangeWithRadius<T>(arr: T[], centerIndex: number, n: number) {
    // 计算起始索引（确保不小于0）
    const start = Math.max(0, centerIndex - n);
    // 计算结束索引（确保不超过数组长度-1）
    const end = Math.min(arr.length - 1, centerIndex + n);
    // 截取范围内的元素
    return arr.slice(start, end + 1); // slice(end+1) 因为结束索引不包含
}

export function getPreviousItem<T>(arr: T[], currentIndex: number) {
    if (currentIndex > 0) {
        return arr[currentIndex - 1];
    }
    return arr[currentIndex];
}

export function getNextItem<T>(arr: T[], currentIndex: number) {
    if (currentIndex < arr.length - 1) {
        return arr[currentIndex + 1];
    }
    return arr[currentIndex];
}