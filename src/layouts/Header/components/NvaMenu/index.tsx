/*
 * @Author: bugdr
 * @Date: 2022-07-25 21:59:29
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-30 12:02:29
 * @FilePath: \train-study\src\layouts\Header\components\NvaMenu\index.tsx
 * @Description:
 */
import { AppleOutlined, HomeOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NvaMenu: FC = () => {
    const items = [
        { label: '应用市场', key: '/app/video-center' }, // 菜单项务必填写 key
        { label: '开发者', key: '/developer', icon: <AppleOutlined /> },
        { label: '社区与合作伙伴', key: '/communities', icon: <AppleOutlined /> },
        { label: '支持与服务', key: '/support-services', icon: <AppleOutlined /> },
        { label: '运营与管理', key: '/operations', icon: <AppleOutlined /> },
    ];
    // 获取路由路径
    const { pathname } = useLocation();
    console.log('pathname', pathname);
    // 当前选着的菜单的key
    const [selectedKeys, setSelectedKeys] = useState<string[]>([pathname]);

    useEffect(() => {
        setSelectedKeys([pathname]);
    }, [pathname]);

    // 路由跳转的hooks
    const navigate = useNavigate();
    // 选择对应的路由进行跳转
    const clickMenu = (menuList: any) => {
        // 结构出key
        const { key } = menuList;
        // 跳转路由
        navigate(key);
    };

    return (
        <>
            <Menu
                mode='horizontal'
                selectedKeys={selectedKeys}
                defaultSelectedKeys={selectedKeys}
                items={items}
                onClick={clickMenu}
            />
        </>
    );
};
export default NvaMenu;
