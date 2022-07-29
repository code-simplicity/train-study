/*
 * @Author: bugdr
 * @Date: 2022-07-29 11:14:01
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-29 11:24:53
 * @FilePath: \hello-world\40308-dupeiyi\packages\train-study\src\router\modules\todo\index.tsx
 * @Description:日记记录
 */

import { lazy } from 'react';
import LayoutRouter from '../../constant';
import lazyLoad from '../../lazyLoad';

const TodoRouter: IRouter = {
    element: <LayoutRouter />,
    children: [
        {
            path: '/todo',
            element: lazyLoad(lazy(() => import('src/pages/TodoList'))),
        },
    ],
};

export default TodoRouter;
