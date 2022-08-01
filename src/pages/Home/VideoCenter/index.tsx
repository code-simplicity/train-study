/*
 * @Author: bugdr
 * @Date: 2022-07-30 12:00:38
 * @LastEditors: bugdr
 * @LastEditTime: 2022-08-01 10:53:52
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
import useStores from 'src/hooks/useStores';

const VideoCenter: FC = () => {
    const [videoList, setVideoList] = useState<IVideoList[]>([]);
    // 自定义store的hooks
    const { loadingStore, videoCenterStore } = useStores();
    const [pageParams, setPageParams] = useState({
        current: 1,
        pageSize: 9,
        total: 100,
    });

    // 获取一个接口试试
    const initVideoList = async (args: any) => {
        loadingStore.setLoadingStatus(true);
        const params = {
            page: args.current,
            pageSize: args.pageSize,
        };
        try {
            // 初始化设置视频列表
            videoCenterStore.setInitVideoList(params);
            // const { data, code, msg } = await getVideoList(params);
            // if (code !== ResultCodeEnum.SUCCESS) return message.error('获取视频失败');
            // message.success(msg);
            // setVideoList(data.list);
            // setPageParams({
            //     current: data.page,
            //     pageSize: data.pageSize,
            //     total: data.total,
            // });
            loadingStore.setLoadingStatus(false);
        } catch (error: any) {
            loadingStore.setLoadingStatus(false);
            return new Error(error);
        }
    };
    useEffect(() => {
        initVideoList(pageParams);
    }, []);
    return (
        <div className=''>
            <div className='mb-2'>
                <VideoSearch
                    initVideoList={initVideoList}
                    setVideoList={setVideoList}
                    pageParams={pageParams}
                    setPageParams={setPageParams}
                />
            </div>
            <div className='md:mx-40'>
                {videoCenterStore.getIsSearch ? (
                    <SearchVideoList
                        pageParams={pageParams}
                        setPageParams={setPageParams}
                        videoList={videoList}
                        initVideoList={initVideoList}
                    />
                ) : (
                    <VideoContent
                        pageParams={pageParams}
                        setPageParams={setPageParams}
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
