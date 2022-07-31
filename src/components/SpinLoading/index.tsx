/*
 * @Author: bugdr
 * @Date: 2022-07-28 22:05:12
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-29 12:55:15
 * @FilePath: \train-study\src\components\SpinLoading\index.tsx
 * @Description:spin加载
 */
import { Spin } from 'antd';
import React, { FC } from 'react';

const SpinLoading: FC = () => {
    return (
        <Spin
            className='flex items-center justify-center w-full h-full'
            delay={500}
            size='large'
            tip={<span>正在加载中...</span>}
        />
    );
};

export default SpinLoading;
