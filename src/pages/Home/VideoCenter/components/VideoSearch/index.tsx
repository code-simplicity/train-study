/*
 * @Author: bugdr
 * @Date: 2022-07-30 12:08:21
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-30 12:58:50
 * @FilePath: \train-study\src\pages\Home\VideoCenter\components\VideoSearch\index.tsx
 * @Description:搜索头部组件
 */
import React, { FC } from 'react';
import { Button, Image, Input } from 'antd';
import videoSearchBg from 'src/assets/images/videoSearchBg.png';

const VideoSearch: FC = () => {
    return (
        <>
            <div className='relative text-white'>
                <Image className='min-h-36' src={videoSearchBg} alt='搜索背景' preview={false} />
                <div className='absolute top-0 left-0 bottom-0 right-0 '>
                    <div className='flex items-center justify-center flex-col md:mt-8'>
                        <div className='text-2xl'>视频中心</div>
                        <div className='my-4'>帮你快速了解汉得产品</div>
                        <div className='flex items-center w-120'>
                            <Input className='' allowClear placeholder='请搜索类别/视频名称' />
                            <Button className='px-8' type='primary'>
                                搜索
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div>VideoSearch</div>
        </>
    );
};

export default VideoSearch;
