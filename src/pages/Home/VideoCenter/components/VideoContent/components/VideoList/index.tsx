/*
 * @Author: bugdr
 * @Date: 2022-07-30 16:32:00
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-30 20:28:53
 * @FilePath: \train-study\src\pages\Home\VideoCenter\components\VideoContent\components\VideoList\index.tsx
 * @Description:
 */
import React from 'react';
import { PlaySquareOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import videoTopIcon from 'src/assets/images/videoTop.svg';
import videoList from '../data';

const VideoList = () => {
    return (
        <>
            {videoList.map(item => {
                return (
                    <div key={item.id} className='bg-white rounded-sm'>
                        <div className='relative'>
                            <Image
                                className='object-cover rounded-tl-sm rounded-tr-sm'
                                height={166}
                                width='100%'
                                src={item.cover}
                                alt={item.title}
                                preview={false}
                            />
                            {item.top ? (
                                <img
                                    className='absolute top-1 right-1 h-5 rounded-md'
                                    src={videoTopIcon}
                                    alt='置顶'
                                />
                            ) : null}

                            <p className='absolute bottom-1 left-2 text-white'>{item.duration}</p>
                        </div>
                        <div className='p-2'>
                            <p className='md:text-lg truncate'>{item.title}</p>
                            <p className='truncate my-2 text-sm'>{item.description}</p>
                            <div className='flex items-center justify-between text-sm'>
                                <div className='flex items-center'>
                                    <PlaySquareOutlined />
                                    <span>{item.playCounts}播放</span>
                                </div>
                                <div>{item.sections}节</div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default VideoList;
