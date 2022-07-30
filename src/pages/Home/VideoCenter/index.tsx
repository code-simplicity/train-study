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
import { ResultCodeEnum } from 'src/enum/http';
import { getVideoList } from 'src/api/video';
import { message } from 'antd';

const VideoCenter: FC = () => {
    // 控制搜索，通过一个状态回调来进行页面的切换
    const [isSearch, setIsSearch] = useState<boolean>(false);
    const [videoList, setVideoList] = useState<IVideoList[]>([]);

    // 获取一个接口试试
    const initVideoList = async () => {
        const params = {
            page: 1,
            pageSize: 9,
        };
        try {
            const { data, code, msg } = await getVideoList(params);
            if (code !== ResultCodeEnum.SUCCESS) return message.error('获取视频失败');
            message.success(msg);
            setVideoList(data.list);
        } catch (error: any) {
            return new Error(error);
        }
    };
    useEffect(() => {
        initVideoList();
    }, []);
    return (
        <div className=''>
            <div className='mb-2'>
                <VideoSearch
                    setIsSearch={setIsSearch}
                    initVideoList={initVideoList}
                    setVideoList={setVideoList}
                />
            </div>
            <div className='md:mx-40'>
                {isSearch ? (
                    <SearchVideoList videoList={videoList} />
                ) : (
                    <VideoContent
                        videoList={videoList}
                        initVideoList={initVideoList}
                        setVideoList={setVideoList}
                    />
                )}
            </div>
        </div>
    );
};
export default VideoCenter;
