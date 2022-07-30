/*
 * @Author: bugdr
 * @Date: 2022-07-29 12:14:00
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-30 11:38:20
 * @FilePath: \train-study\src\layouts\Header\index.tsx
 * @Description:
 */
import { Input } from 'antd';
import React, { FC } from 'react';
import AppLogo from './components/AppLogo';
import NvaMenu from './components/NvaMenu';
import RightHeader from './components/RightHeader';

const LayoutHeader: FC = () => {
    return (
        <header className='flex items-center bg-white justify-between h-12'>
            <div className='ml-8 w-36 min-w-36'>
                <AppLogo />
            </div>
            <div className='w-8/12'>
                <NvaMenu />
            </div>
            <div className='flex-1 h-full w-4/12'>
                <RightHeader />
            </div>
        </header>
    );
};

export default LayoutHeader;
