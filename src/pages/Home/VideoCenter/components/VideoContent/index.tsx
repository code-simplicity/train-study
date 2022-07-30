/*
 * @Author: bugdr
 * @Date: 2022-07-30 12:08:35
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-30 16:49:18
 * @FilePath: \train-study\src\pages\Home\VideoCenter\components\VideoContent\index.tsx
 * @Description:内容组件
 */
import React, { FC } from 'react';
import CPagination from 'src/components/CPagination';
import ProductList from './components/ProductList';
import VideoClassify from './components/VideoClassify';
import VideoList from './components/VideoList';

const VideoContent: FC = () => {
    return (
        <div className='flex'>
            <div className='w-60 bg-white rounded mr-4'>
                <ProductList />
            </div>
            <div className='md:flex-1'>
                <VideoClassify />
                {/* 栅格布局实现九宫格 */}
                <div className='grid grid-cols-3 gap-4'>
                    <VideoList />
                </div>
                {/* 分页 */}
                <div className='flex items-center justify-end'>
                    <CPagination defaultCurrent={1} total={20} pageSize={1} current={1} />
                </div>
            </div>
        </div>
    );
};

export default VideoContent;
