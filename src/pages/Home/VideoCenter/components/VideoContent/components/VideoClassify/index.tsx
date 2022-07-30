/*
 * @Author: bugdr
 * @Date: 2022-07-30 16:31:10
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-30 17:01:53
 * @FilePath: \train-study\src\pages\Home\VideoCenter\components\VideoContent\components\videoClassify\index.tsx
 * @Description:视频分类列表
 */
import { message } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import { getVideoListByVideoCategoryId } from 'src/api/video';
import { getVideoCategoryList } from 'src/api/videoCategory';
import { ResultCodeEnum } from 'src/enum/http';

interface IVideoClassifyProps {
    setVideoList: React.Dispatch<React.SetStateAction<IVideoList[]>>;
    initVideoList: any;
}

const VideoClassify: FC<IVideoClassifyProps> = (props: IVideoClassifyProps) => {
    const { setVideoList, initVideoList } = props;

    const [videoCategoryList, setVideoCategoryList] = useState<IVideoCategory[]>([]);
    // 获取一个接口试试
    const initVideoCategoryList = async () => {
        try {
            const { code, msg, data } = await getVideoCategoryList();
            if (code !== ResultCodeEnum.SUCCESS) return message.error('获取视频分类列表失败');
            message.success(msg);
            setVideoCategoryList(data);
        } catch (error: any) {
            return new Error(error);
        }
    };
    useEffect(() => {
        initVideoCategoryList();
    }, []);
    // 激活左侧栏的key
    const [videoClassifyActivate, setVideoClassifyActivate] = useState<string>('all');
    const handleActive = async (id: string) => {
        setVideoClassifyActivate(id);
        const params = {
            videoCategoryId: id,
            page: 1,
            pageSize: 9,
        };
        try {
            // 如果id等于这个就走初始化
            if (id === 'all') return initVideoList();
            const { code, msg, data } = await getVideoListByVideoCategoryId(params);
            if (code !== ResultCodeEnum.SUCCESS) return message.error(msg);
            message.success(msg);
            setVideoList(data.list);
        } catch (error: any) {
            return new Error(error);
        }
    };
    return (
        <>
            <div className='bg-white flex items-center px-3 py-2 mb-4'>
                <div className='mr-4'>视频分类</div>
                <div className='flex items-center'>
                    {videoCategoryList.map(item => {
                        return (
                            <div
                                onClick={() => handleActive(item.id)}
                                key={item.id}
                                className={`mr-6 px-2 py-1 cursor-pointer ${
                                    item.id === videoClassifyActivate
                                        ? 'bg-yellow-100 bg-opacity-65 text-yellow-600'
                                        : ''
                                }`}
                            >
                                {item.name}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default VideoClassify;
