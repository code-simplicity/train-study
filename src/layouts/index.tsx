/*
 * @Author: bugdr
 * @Date: 2022-07-25 16:34:03
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-27 17:28:18
 * @FilePath: \hello-world\40308-dupeiyi\packages\train-study\src\layouts\index.tsx
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
                <Layout
                    style={{
                        position: 'relative',
                    }}
                >
                    <LayoutContent />
                    <LayoutFooter />
                </Layout>
            </Layout>
        </>
    );
};

export default LayoutApp;
