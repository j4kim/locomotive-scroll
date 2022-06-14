export function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
}

export function map(value, min0, max0, min1, max1) {
    return min1 + ((value - min0) / (max0 - min0)) * (max1 - min1);
}