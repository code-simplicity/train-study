/*
 * @Author: bugdr
 * @Date: 2022-07-29 11:06:17
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-29 11:07:21
 * @FilePath: \hello-world\40308-dupeiyi\packages\train-study\src\router\lazyLoad.tsx
 * @Description:路由懒加载
 */
import React, { ReactNode, Suspense } from 'react';
import SpinLoading from 'src/components/SpinLoading';

const lazyLoad = (Comp: React.LazyExoticComponent<any>): ReactNode => {
    return (
        <Suspense fallback={<SpinLoading />}>
            <Comp />
        </Suspense>
    );
};

export default lazyLoad;
