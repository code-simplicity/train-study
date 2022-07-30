/*
 * @Author: bugdr
 * @Date: 2022-07-27 16:46:08
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-30 12:03:51
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
            // element: lazyLoad(lazy(() => import('src/pages/Home'))),
            children: [
                {
                    path: '/app/video-center',
                    meta: {
                        title: '视频中心',
                        key: 'videoCenter',
                    },
                    element: lazyLoad(lazy(() => import('src/pages/Home/VideoCenter'))),
                },
            ],
        },
    ],
};

export default appRouter;
