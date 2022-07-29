/*
 * @Author: bugdr
 * @Date: 2022-07-25 16:20:50
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-29 11:22:21
 * @FilePath: \hello-world\40308-dupeiyi\packages\train-study\src\layouts\Contents\index.tsx
 * @Description:
 */
import { Content } from 'antd/lib/layout/layout';
import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './index.module.less';

const LayoutContent: FC = () => {
    // 后面做解析替代
    // TODO:
    const subNva = [
        {
            path: 'tuijian',
            name: 'tuijian',
            meta: {
                title: '推荐',
            },
        },
        {
            path: 'guanzhu',
            name: 'guanzhu',
            meta: {
                title: '关注',
            },
        },
        {
            path: 'blockend',
            name: 'blockend',
            meta: {
                title: '后端',
            },
        },
        {
            path: 'forndEnd',
            name: 'forndEnd',
            meta: {
                title: '前端',
            },
        },
        {
            path: 'android',
            name: 'android',
            meta: {
                title: 'Android',
            },
        },
        {
            path: 'ios',
            name: 'ios',
            meta: {
                title: 'IOS',
            },
        },
    ];
    return (
        <Content className={styles['content-container']}>
            {/* 二级子菜单组件，这里不当封装了二级子菜单组件，还封装了三级子菜单组件 */}
            <div className={styles['sub-nva-container']}>
                {subNva.map(item => {
                    return (
                        <div key={item.name} className={styles['sub-nva-item']}>
                            {item.meta.title}
                        </div>
                    );
                })}
            </div>
            <Outlet />
        </Content>
    );
};

export default LayoutContent;
