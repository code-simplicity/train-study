/*
 * @Author: bugdr
 * @Date: 2022-07-25 16:34:03
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-29 12:49:52
 * @FilePath: \train-study\src\layouts\index.tsx
 * @Description:
 */
import { Layout } from 'antd';
import { relative } from 'path';
import React, { FC } from 'react';
import LayoutContent from './Contents';
import LayoutFooter from './Footer';
import LayoutHeader from './Header';

const LayoutApp: FC = () => {
    return (
        <>
            <Layout>
                <LayoutHeader />
                <LayoutContent />
                <LayoutFooter />
            </Layout>
        </>
    );
};

export default LayoutApp;
