/*
 * @Author: bugdr
 * @Date: 2022-07-28 09:23:24
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-28 09:29:57
 * @FilePath: \hello-world\40308-dupeiyi\packages\train-study\types\store.d.ts
 * @Description:
 */
/// <reference types="react-scripts" />

// 定义TodoList的接口
interface ITodo {
    id: number;
    name: string;
    description: string;
    completed?: boolean;
}
