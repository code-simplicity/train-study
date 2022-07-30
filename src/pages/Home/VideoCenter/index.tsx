/*
 * @Author: bugdr
 * @Date: 2022-07-30 12:00:38
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-30 20:56:34
 * @FilePath: \train-study\src\pages\Home\VideoCenter\index.tsx
 * @Description:视频中心
 */
import React, { FC, useEffect, useState } from 'react';
import VideoContent from './components/VideoContent';
import VideoSearch from './components/VideoSearch';
import SearchVideoList from './components/SearchVideoList';
import { getUserInfo } from 'src/api/user';

import 'src/mocks/video/index';
import axios from 'axios';
import { ResultCodeEnum } from 'src/enum/http';
import { message } from 'antd';

const VideoCenter: FC = () => {
    // 控制搜索，通过一个状态回调来进行页面的切换
    const [isSearch, setIsSearch] = useState<boolean>(false);
    // 获取一个接口试试
    const getInfo = async () => {
        const data = await getUserInfo();
        if (data.code === ResultCodeEnum.SUCCESS) {
            message.success(data.msg);
            console.log('data :>> ', data);
        }
    };
    useEffect(() => {
        getInfo();
    }, []);
    return (
        <div className=''>
            <div className='mb-2'>
                <VideoSearch setIsSearch={setIsSearch} />
            </div>
            <div className='md:mx-40'>{isSearch ? <SearchVideoList /> : <VideoContent />}</div>
        </div>
    );
};
export default VideoCenter;
