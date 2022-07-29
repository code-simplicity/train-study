import React, { FC } from 'react';
import styles from './index.module.less';

const LayoutFooter: FC = () => {
    return (
        <div className={styles['footer-container']}>
            <div>底部-footer</div>
        </div>
    );
};

export default LayoutFooter;
