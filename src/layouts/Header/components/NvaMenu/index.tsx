/*
 * @Author: bugdr
 * @Date: 2022-07-25 21:59:29
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-28 22:28:08
 * @FilePath: \hello-world\40308-dupeiyi\packages\train-study\src\layouts\Header\components\NvaMenu\index.tsx
 * @Description:
 */
import { AppleOutlined, HomeOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const NvaMenu: FC = () => {
    const items = [
        { label: '首页', key: 'home', icon: <HomeOutlined /> }, // 菜单项务必填写 key
        { label: '日记', key: 'todo', icon: <AppleOutlined /> },
    ];
    // 路由跳转的hooks
    const navigate = useNavigate();
    // 选择对应的路由进行跳转
    const onSelect = (menuList: any) => {
        // 结构出key
        const { key } = menuList;
        // 跳转路由
        navigate(key);
    };

    return (
        <>
            <Menu mode='horizontal' items={items} onSelect={onSelect} />
        </>
    );
};
export default NvaMenu;
