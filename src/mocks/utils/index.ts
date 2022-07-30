// 编写一个函数产生1-9的任意随机数
export function randomNumber(str: string) {
    const num = Math.ceil((Math.random() * 1000000000) % 9);
    return `${str}${num}`;
}
