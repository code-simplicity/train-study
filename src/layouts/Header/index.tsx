import { Input } from 'antd';
import React, { FC } from 'react';
import AppLogo from './components/AppLogo';
import NvaMenu from './components/NvaMenu';
import styles from './index.module.less';

const LayoutHeader: FC = () => {
    return (
        <header className={styles['header-container']}>
            <div className={styles['header-logo']}>
                <AppLogo />
            </div>
            <div>
                <NvaMenu />
            </div>
            <div>
                <Input placeholder='请输入你想搜索的内容吧' />
            </div>
        </header>
    );
};

export default LayoutHeader;
