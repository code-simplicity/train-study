/*
 * @Author: bugdr
 * @Date: 2022-07-28 21:51:10
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-29 10:59:59
 * @FilePath: \hello-world\40308-dupeiyi\packages\train-study\types\router.d.ts
 * @Description:
 */
/// <reference types="react-scripts" />

// 定义router的接口
interface IRouter {
    path?: string;
    element: React.ReactNode;
    meta?: IMeta;
    children?: IRouter[];
}

// 定义路由元的接口
interface IMeta {
    title?: string;
    icon?: string;
    key: string;
}
