/*
 * @Author: bugdr
 * @Date: 2022-07-27 16:46:08
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-29 11:25:07
 * @FilePath: \hello-world\40308-dupeiyi\packages\train-study\src\router\modules\home\index.tsx
 * @Description:首页的菜单和路由
 */
import { lazy } from 'react';
import LayoutRouter from '../../constant';
import lazyLoad from '../../lazyLoad';

const HomeRouter: IRouter = {
    element: <LayoutRouter />,
    children: [
        {
            path: '/home',
            meta: {
                title: '首页',
                key: 'Home',
            },
            element: lazyLoad(lazy(() => import('src/pages/Home'))),
            children: [
                {
                    path: '/home/synthesis',
                    meta: {
                        title: '综合',
                        key: 'synthesis',
                    },
                    element: lazyLoad(lazy(() => import('src/pages/Home/Synthesis'))),
                },
                {
                    path: '/home/attention',
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

export default HomeRouter;
