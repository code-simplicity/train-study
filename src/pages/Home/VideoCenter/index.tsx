/*
 * @Author: bugdr
 * @Date: 2022-07-30 12:00:38
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-30 12:13:05
 * @FilePath: \train-study\src\pages\Home\VideoCenter\index.tsx
 * @Description:视频中心
 */
import React, { FC } from 'react';
import VideoContent from './components/VideoContent';
import VideoSearch from './components/VideoSearch';

const VideoCenter: FC = () => {
    return (
        <div className='flex justify-center flex-col items-center'>
            <div className=''>
                <VideoSearch />
            </div>
            <div>
                <VideoContent />
            </div>
        </div>
    );
};
export default VideoCenter;
