/*
 * @Author: bugdr
 * @Date: 2022-07-30 16:32:00
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-30 17:02:31
 * @FilePath: \train-study\src\pages\Home\VideoCenter\components\VideoContent\components\VideoList\index.tsx
 * @Description:
 */
import React from 'react';
import { PlaySquareOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import videoTopIcon from 'src/assets/images/videoTop.svg';

const VideoList = () => {
    return (
        <>
            <div className='bg-white rounded-sm'>
                <div className='relative'>
                    <Image
                        className='object-cover rounded-tl-sm rounded-tr-sm'
                        height={166}
                        width='100%'
                        src='https://bugdr-project-1305152720.cos.ap-beijing.myqcloud.com/blog-images/app/blog-app.jpg'
                        alt='视频教程'
                        preview={false}
                    />
                    <img
                        className='absolute top-1 right-1 h-5 rounded-md'
                        src={videoTopIcon}
                        alt='置顶'
                    />
                    <p className='absolute bottom-1 left-2 text-white'>01:20:56</p>
                </div>
                <div className='p-2'>
                    <p className='md:text-lg'>2020 前端技术分享</p>
                    <p className='truncate my-1'>介绍hzro的开发历史以及历史价值等参考运输11111</p>
                    <div className='flex items-center justify-between text-sm'>
                        <div className='flex items-center'>
                            <PlaySquareOutlined />
                            <span>12000播放</span>
                        </div>
                        <div>12节</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VideoList;
