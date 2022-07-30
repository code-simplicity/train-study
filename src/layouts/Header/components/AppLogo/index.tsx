/*
 * @Author: bugdr
 * @Date: 2022-07-29 12:14:00
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-30 10:43:48
 * @FilePath: \train-study\src\layouts\Header\components\AppLogo\index.tsx
 * @Description:
 */
import { AlignCenterOutlined } from '@ant-design/icons';
import React, { FC } from 'react';

const AppLogo: FC = () => {
    return (
        <div className='flex items-center'>
            <div>
                <AlignCenterOutlined className='text-2xl mr-2' />
            </div>
            <div>
                <div className='text-base'>焱牛开放平台</div>
                <div className='text-xs'>HAND KINGNEW</div>
            </div>
        </div>
    );
};
export default AppLogo;
