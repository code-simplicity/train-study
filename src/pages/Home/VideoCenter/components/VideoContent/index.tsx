/*
 * @Author: bugdr
 * @Date: 2022-07-30 12:08:35
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-30 18:53:18
 * @FilePath: \train-study\src\pages\Home\VideoCenter\components\VideoContent\index.tsx
 * @Description:内容组件
 */
import { message } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import { getVideoList } from 'src/api/video';
import CPagination from 'src/components/CPagination';
import ProductList from './components/ProductList';
import VideoClassify from './components/VideoClassify';
import VideoList from './components/VideoList';

interface IVideoContentProps {
    setVideoList: React.Dispatch<React.SetStateAction<IVideoList[]>>;
    initVideoList: any;
    videoList: IVideoList[];
    pageParams: any;
    setPageParams: any;
}

const VideoContent: FC<IVideoContentProps> = (props: IVideoContentProps) => {
    const { videoList, setVideoList, initVideoList, pageParams, setPageParams } = props;

    return (
        <div className='flex'>
            <div className='w-60 bg-white rounded mr-4'>
                <ProductList
                    setVideoList={setVideoList}
                    initVideoList={initVideoList}
                    pageParams={pageParams}
                    setPageParams={setPageParams}
                />
            </div>
            <div className='md:flex-1'>
                <VideoClassify
                    setVideoList={setVideoList}
                    initVideoList={initVideoList}
                    pageParams={pageParams}
                    setPageParams={setPageParams}
                />
                {/* 栅格布局实现九宫格 */}
                <div className='grid grid-cols-3 gap-6'>
                    <VideoList videoList={videoList} />
                </div>
                {/* 分页 */}
                <div className='flex items-center justify-end mt-2'>
                    <CPagination
                        total={pageParams.total}
                        pageSize={pageParams.pageSize}
                        current={pageParams.current}
                        initVideoList={initVideoList}
                    />
                </div>
            </div>
        </div>
    );
};

export default VideoContent;
