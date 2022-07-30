import { Empty } from 'antd';
import { spawn } from 'child_process';
import React, { FC } from 'react';

const CEmpty: FC = () => {
    return (
        <>
            <Empty description={<span>抱歉，没有内容哦</span>} />
        </>
    );
};

export default CEmpty;
