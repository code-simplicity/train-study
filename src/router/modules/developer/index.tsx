/*
 * @Author: bugdr
 * @Date: 2022-07-29 11:14:01
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-30 10:57:24
 * @FilePath: \train-study\src\router\modules\developer\index.tsx
 * @Description:日记记录
 */

import { lazy } from 'react';
import LayoutRouter from '../../constant';
import lazyLoad from '../../lazyLoad';

const developerRouter: IRouter = {
    element: <LayoutRouter />,
    children: [
        {
            path: '/developer',
            element: lazyLoad(lazy(() => import('src/pages/TodoList'))),
        },
    ],
};

export default developerRouter;
