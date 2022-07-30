/*
 * @Author: bugdr
 * @Date: 2022-07-27 16:46:08
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-30 10:55:50
 * @FilePath: \train-study\src\router\modules\app\index.tsx
 * @Description:首页的菜单和路由
 */
import { lazy } from 'react';
import LayoutRouter from '../../constant';
import lazyLoad from '../../lazyLoad';

const appRouter: IRouter = {
    element: <LayoutRouter />,
    children: [
        {
            path: '/app',
            meta: {
                title: '首页',
                key: 'App',
            },
            element: lazyLoad(lazy(() => import('src/pages/Home'))),
            children: [
                {
                    path: '/app/synthesis',
                    meta: {
                        title: '综合',
                        key: 'synthesis',
                    },
                    element: lazyLoad(lazy(() => import('src/pages/Home/Synthesis'))),
                },
                {
                    path: '/app/attention',
                    meta: {
                        title: '关注',
                        key: 'attention',
                    },
                    element: lazyLoad(lazy(() => import('src/pages/Home/Attention'))),
                },
            ],
        },
    ],
};

export default appRouter;
