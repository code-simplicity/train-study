/*
 * @Author: bugdr
 * @Date: 2022-07-30 17:19:08
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-30 19:47:25
 * @FilePath: \train-study\src\pages\Home\VideoCenter\components\SearchVideoList\index.tsx
 * @Description:搜索视频列表
 */
import { PlaySquareOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import React, { FC } from 'react';
import CEmpty from 'src/components/CEmpty';
import styles from './index.module.less';

interface ISearchVideoListProps {
    videoList: IVideoList[];
}

const SearchVideoList: FC<ISearchVideoListProps> = (props: ISearchVideoListProps) => {
    const { videoList } = props;

    return (
        <div>
            {/* 搜索结果 */}
            <div className='bg-white flex items-center px-3 py-2 mb-4 rounded-sm'>
                共找到{<span className='text-yellow-600 mx-1'>{videoList.length}</span>}个
                {<span className='text-yellow-600 mx-1'>“{1}”</span>}相关视频
            </div>
            {/* 搜索视频列表 */}
            {videoList && videoList.length ? (
                videoList.map(item => {
                    return (
                        <div className='flex bg-white rounded-sm p-3 mb-4'>
                            <div className='w-60 mr-4'>
                                <div className='mb-2'>
                                    <Image
                                        className='object-cover rounded-tl-sm rounded-tr-sm'
                                        height={150}
                                        width='100%'
                                        src={item.cover}
                                        alt={item.title}
                                        preview={false}
                                    />
                                </div>
                                <div className='flex items-center'>
                                    <PlaySquareOutlined />
                                    <span>{item.playCounts}播放</span>
                                </div>
                            </div>
                            <div className='flex-1'>
                                <div className='flex items-center justify-between'>
                                    <p className='text-xl'>{item.title}</p>
                                    <div className=''>{item.sections}节</div>
                                </div>
                                <div className='flex items-center my-4'>
                                    {item.labels.map(label => {
                                        return (
                                            <div className='px-2 py-1 bg-light-700 mr-4'>
                                                {label}
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className={`text-cool-gray-500 ${styles['word-description']}`}>
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    );
                })
            ) : (
                <CEmpty />
            )}
        </div>
    );
};

export default SearchVideoList;
