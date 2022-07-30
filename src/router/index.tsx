/*
 * @Author: bugdr
 * @Date: 2022-07-27 13:42:01
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-30 12:03:24
 * @FilePath: \train-study\src\router\index.tsx
 * @Description:路由组件
 */
import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import HomeRouter from './modules/app';
import developerRouter from './modules/developer';
// import TodoRouter from './modules/todo';

// 编写一个函数获取到router下面的modules文件夹路径下的文件组合
// const metaRouters = require.context('./modules', true, /\.tsx$/);

// 收集路由的数组
// export const routerArray: IRouter[] = [];

// Object.keys(metaRouters).forEach((item: any) => {
//     Object.keys(metaRouters[item]).forEach((key: any) => {
//         routerArray.push(...metaRouters[item][key]);
//     });
// });
// routerArray = resolveRoute(metaRouters);
// console.log('routerArray :>> ', routerArray);
const staticRoutes: IRouter[] = [
    {
        path: '/',
        element: <Navigate to='/app/video-center' />,
    },
    HomeRouter,
    developerRouter,
    // TodoRouter,
    // ...routerArray,
];

const Router = () => {
    const routes = useRoutes(staticRoutes);
    return routes;
};

export default Router;
