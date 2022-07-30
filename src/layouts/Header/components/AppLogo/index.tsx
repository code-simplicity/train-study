/*
 * @Author: bugdr
 * @Date: 2022-07-29 12:14:00
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-30 19:56:13
 * @FilePath: \train-study\src\layouts\Header\components\AppLogo\index.tsx
 * @Description:
 */
import { Image } from 'antd';
import { AlignCenterOutlined } from '@ant-design/icons';
import React, { FC } from 'react';
import LogoImage from 'src/assets/images/logo.png';

const AppLogo: FC = () => {
    return (
        <div className='flex items-center'>
            <Image src={LogoImage} alt='logo' preview={false} />
        </div>
    );
};
export default AppLogo;
