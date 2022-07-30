/*
 * @Author: bugdr
 * @Date: 2022-07-30 12:08:35
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-30 16:12:56
 * @FilePath: \train-study\src\pages\Home\VideoCenter\components\VideoContent\index.tsx
 * @Description:内容组件
 */
import Icon, { PlaySquareOutlined } from '@ant-design/icons';
import { Image, Pagination } from 'antd';
import React, { FC } from 'react';
import videoTopIcon from 'src/assets/images/videoTop.svg';
import CPagination from 'src/components/CPagination';

const VideoContent: FC = () => {
    const productMenu = [
        {
            label: '全部产品',
            path: 'all',
            key: 'all',
        },
        {
            label: '飞猪Feida',
            path: 'fzf',
            key: 'fzf',
        },
        {
            label: '汉得协同制造软件',
            path: 'hdxtzzrj',
            key: '',
        },
        {
            label: '汉得智能合同管理软件',
            path: 'hdzhhtglrj',
            key: 'hdzhhtglrj',
        },
        {
            label: '虹珊瑚',
            path: 'hsh',
            key: 'hsh',
        },
        {
            label: '汉得运营管理软件',
            path: 'hdyyrjgl',
            key: 'hdyyrjgl',
        },
        {
            label: '汉得智慧财务套件软件',
            path: 'hdzhcwtjrj',
            key: 'hdzhcwtjrj',
        },
        {
            label: '汉得运输管理软件',
            path: 'hdysglrj',
            key: 'hdysglrj',
        },
        {
            label: '汉得清分结算软件',
            path: 'hdqfjsrj',
            key: 'hdqfjsrj',
        },
        {
            label: '海马汇HIPPLUS',
            path: 'hmhhp',
            key: 'hmhhp',
        },
    ];
    const videoClassify = [
        {
            label: '全部分类',
            path: 'all',
            key: 'all',
        },
        {
            label: '开放平台',
            path: 'kfpt',
            key: 'kfpt',
        },
        {
            label: '项目管理',
            path: 'xmgl',
            key: 'xmgl',
        },
        {
            label: '开发者',
            path: 'kfz',
            key: 'kfz',
        },
        {
            label: '猪齿鱼',
            path: 'zcy',
            key: 'zcy',
        },
        {
            label: '海马汇',
            path: 'hmh',
            key: 'hmh',
        },
    ];
    return (
        <div className='flex'>
            <div className='w-60 bg-white rounded mr-4'>
                {productMenu.map(item => {
                    return (
                        <div key={item.key} className='bg-light-100 px-4 h-8'>
                            {item.label}
                        </div>
                    );
                })}
            </div>
            <div className='md:flex-1'>
                <div className='bg-white flex items-center px-3 py-2 mb-4'>
                    <div className='mr-4'>视频分类</div>
                    <div className='flex'>
                        {videoClassify.map(item => {
                            return (
                                <div key={item.key} className='mr-4 cursor-pointer'>
                                    {item.label}
                                </div>
                            );
                        })}
                    </div>
                </div>
                {/* 栅格布局实现九宫格 */}
                <div className='grid grid-cols-3 gap-4'>
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
                            <p className='text-lg'>2020 前端技术分享</p>
                            <p className='truncate my-1'>
                                介绍hzro的开发历史以及历史价值等参考运输11111
                            </p>
                            <div className='flex items-center justify-between text-sm'>
                                <div className='flex items-center'>
                                    <PlaySquareOutlined />
                                    <span>12000播放</span>
                                </div>
                                <div>12节</div>
                            </div>
                        </div>
                    </div>
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
                            <p className='text-lg'>2020 前端技术分享</p>
                            <p className='truncate my-1'>
                                介绍hzro的开发历史以及历史价值等参考运输11111
                            </p>
                            <div className='flex items-center justify-between text-sm'>
                                <div className='flex items-center'>
                                    <PlaySquareOutlined />
                                    <span>12000播放</span>
                                </div>
                                <div>12节</div>
                            </div>
                        </div>
                    </div>
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
                            <p className='text-lg'>2020 前端技术分享</p>
                            <p className='truncate my-1'>
                                介绍hzro的开发历史以及历史价值等参考运输11111
                            </p>
                            <div className='flex items-center justify-between text-sm'>
                                <div className='flex items-center'>
                                    <PlaySquareOutlined />
                                    <span>12000播放</span>
                                </div>
                                <div>12节</div>
                            </div>
                        </div>
                    </div>
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
                            <p className='text-lg'>2020 前端技术分享</p>
                            <p className='truncate my-1'>
                                介绍hzro的开发历史以及历史价值等参考运输11111
                            </p>
                            <div className='flex items-center justify-between text-sm'>
                                <div className='flex items-center'>
                                    <PlaySquareOutlined />
                                    <span>12000播放</span>
                                </div>
                                <div>12节</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 分页 */}
                <div className='flex items-center justify-end'>
                    <CPagination defaultCurrent={1} total={20} pageSize={1} current={1} />
                </div>
            </div>
        </div>
    );
};

export default VideoContent;
