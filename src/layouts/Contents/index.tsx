/*
 * @Author: bugdr
 * @Date: 2022-07-25 16:20:50
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-30 11:57:19
 * @FilePath: \train-study\src\layouts\Contents\index.tsx
 * @Description:
 */
import { Content } from 'antd/lib/layout/layout';
import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './index.module.less';

const LayoutContent: FC = () => {
    return (
        <Content className={styles['content-container']}>
            <Outlet />
        </Content>
    );
};

export default LayoutContent;
