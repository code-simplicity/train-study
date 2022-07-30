/*
 * @Author: bugdr
 * @Date: 2022-07-30 15:39:43
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-30 16:19:57
 * @FilePath: \train-study\src\components\CPagination\index.tsx
 * @Description:分页器的组件
 */
import { Pagination, Image } from 'antd';
import React, { FC } from 'react';
import prevIcon from 'src/assets/images/turnpage-left-no.svg';
import nextIcon from 'src/assets/images/turnpage-right.svg';
import jumpPrevIcon from 'src/assets/images/turnpage-left2.svg';
import jumpNextIcon from 'src/assets/images/turnpage-right2.svg';
import { EllipsisOutlined } from '@ant-design/icons';

interface ICPaginationProps {
    defaultCurrent?: number;
    pageSize?: number;
    current?: number;
    total?: number;
}

const CPagination: FC<ICPaginationProps> = (props: ICPaginationProps) => {
    const { defaultCurrent, total, pageSize, current } = props;
    return (
        <>
            <Pagination
                defaultCurrent={defaultCurrent}
                total={total}
                pageSize={pageSize}
                current={current}
                hideOnSinglePage={true}
                itemRender={(page, type) => {
                    if (type === 'page') {
                        return <span className='cursor-pointer'>{page}</span>;
                    } else if (type === 'prev') {
                        return (
                            <div className='flex items-center cursor-pointer'>
                                <Image className='h-6 mr-2' src={jumpPrevIcon} preview={false} />
                                <Image className='h-6' src={prevIcon} preview={false} />
                            </div>
                        );
                    } else if (type === 'next') {
                        return (
                            <div className='flex items-center cursor-pointer'>
                                <Image className='h-6 mr-2' src={nextIcon} preview={false} />
                                <Image className='h-6' src={jumpNextIcon} preview={false} />
                            </div>
                        );
                    } else if (type === 'jump-prev') {
                        return <EllipsisOutlined />;
                    } else if (type === 'jump-next') {
                        return <EllipsisOutlined />;
                    }
                }}
            />
        </>
    );
};

export default CPagination;
