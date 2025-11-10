export function getDuration(timeline: number[], i: number) {
    if (i === timeline.length - 1) {
        return timeline[i] - timeline[i - 1];
    } else {
        return timeline[i + 1] - timeline[i];
    }
}

export const imgUrl = (v: unknown) => (typeof v === 'string' ? v : (v as any).src);
