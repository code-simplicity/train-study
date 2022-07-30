/*
 * @Author: bugdr
 * @Date: 2022-07-30 16:31:10
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-30 17:01:53
 * @FilePath: \train-study\src\pages\Home\VideoCenter\components\VideoContent\components\videoClassify\index.tsx
 * @Description:视频分类列表
 */
import React, { useState } from 'react';

const VideoClassify = () => {
    const videoClassify = [
        {
            label: '全部分类',
            path: 'all',
            id: 'all',
        },
        {
            label: '开放平台',
            path: 'kfpt',
            id: 'kfpt',
        },
        {
            label: '项目管理',
            path: 'xmgl',
            id: 'xmgl',
        },
        {
            label: '开发者',
            path: 'kfz',
            id: 'kfz',
        },
        {
            label: '猪齿鱼',
            path: 'zcy',
            id: 'zcy',
        },
        {
            label: '海马汇',
            path: 'hmh',
            id: 'hmh',
        },
    ];
    // 激活左侧栏的key
    const [videoClassifyActivate, setVideoClassifyActivate] = useState<string>('all');
    const handleActive = (id: string) => {
        setVideoClassifyActivate(id);
    };
    return (
        <>
            <div className='bg-white flex items-center px-3 py-2 mb-4'>
                <div className='mr-4'>视频分类</div>
                <div className='flex items-center'>
                    {videoClassify.map(item => {
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
                                {item.label}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default VideoClassify;
