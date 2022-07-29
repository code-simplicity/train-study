/*
 * @Author: bugdr
 * @Date: 2022-07-28 22:05:12
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-28 22:16:07
 * @FilePath: \hello-world\40308-dupeiyi\packages\train-study\src\components\SpinLoading\index.tsx
 * @Description:spin加载
 */
import { Spin } from 'antd';
import React, { FC } from 'react';
import styles from './index.module.less';

const SpinLoading: FC = () => {
    return (
        <div className={styles['spin-loading-container']}>
            <Spin delay={500} size='large' tip={<span>正在加载中...</span>} />
        </div>
    );
};

export default SpinLoading;
