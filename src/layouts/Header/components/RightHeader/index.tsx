/*
 * @Author: bugdr
 * @Date: 2022-07-30 10:59:55
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-30 20:16:24
 * @FilePath: \train-study\src\layouts\Header\components\RightHeader\index.tsx
 * @Description:头部右侧组件
 */
import { BellOutlined, DownOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Dropdown, Image, Menu, Space } from 'antd';
import React, { FC } from 'react';
import userAvatar from 'src/assets/images/头像.svg';
import notice from 'src/assets/images/通知.svg';
import searchIcon from 'src/assets/images/Group_10.svg';

const menu = (
    <Menu
        items={[
            {
                label: '个人中心',
                key: '1',
            },
            {
                label: '退出登陆',
                key: '2',
            },
        ]}
    />
);

const RightHeader: FC = () => {
    return (
        <div className='flex items-center justify-between bg-light-400 h-full px-4 text-base'>
            <Image src={searchIcon} preview={false} />
            <Badge size='small' count={`99`} offset={[8, 1]}>
                <Image src={notice} alt='通知' preview={false} />
            </Badge>
            <div className='cursor-pointer'>控制台</div>
            <div>
                <Dropdown overlay={menu}>
                    <div className='flex items-center cursor-pointer'>
                        <div className='mr-2'>
                            <Avatar src={userAvatar} alt='头像' />
                        </div>
                        <span className='mr-2'>momo.zxy</span>
                        <DownOutlined />
                    </div>
                </Dropdown>
            </div>
        </div>
    );
};

export default RightHeader;
