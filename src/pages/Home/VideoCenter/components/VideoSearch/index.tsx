/*
 * @Author: bugdr
 * @Date: 2022-07-30 12:08:21
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-30 19:42:48
 * @FilePath: \train-study\src\pages\Home\VideoCenter\components\VideoSearch\index.tsx
 * @Description:搜索头部组件
 */
import React, { FC, useRef } from 'react';
import { Button, Image, Input, message } from 'antd';
import videoSearchBg from 'src/assets/images/videoSearchBg.png';
import { searchVideoList } from 'src/api/video';
import { ResultCodeEnum } from 'src/enum/http';
import useLoading from 'src/hooks/useLoading';

interface VideoSearchProps {
    setIsSearch: React.Dispatch<React.SetStateAction<boolean>>;
    initVideoList: any;
    setVideoList: React.Dispatch<React.SetStateAction<IVideoList[]>>;
    pageParams: any;
    setPageParams: any;
}

const VideoSearch: FC<VideoSearchProps> = (props: VideoSearchProps) => {
    const { setIsSearch, initVideoList, setVideoList, pageParams, setPageParams } = props;
    // 输入框的ref
    const searchInputRef = useRef<any>();
    // 输入框回车事件
    // 监听输入框的值是否改变，并且变为空，如果变为空那么就不进行搜索
    const { loadingStore } = useLoading();
    const handleSearch = async () => {
        loadingStore.setLoadingStatus(true);
        // 如果输入框的存在值
        if (searchInputRef.current!.input.value && searchInputRef.current!.input.value !== '') {
            try {
                // 触发搜索
                setIsSearch(true);
                const params = {
                    title: searchInputRef.current!.input.value,
                    page: pageParams.current,
                    pageSize: pageParams.pageSize,
                };
                const { data, code, msg } = await searchVideoList(params);
                if (code !== ResultCodeEnum.SUCCESS) return message.error(msg);
                message.success(msg);
                setVideoList(data.list);
                setPageParams({
                    current: data.page,
                    pageSize: data.pageSize,
                    total: data.total,
                });
                loadingStore.setLoadingStatus(false);
            } catch (error: any) {
                loadingStore.setLoadingStatus(false);
                return new Error(error);
            }
        } else if (searchInputRef.current!.input.value === '') {
            setIsSearch(false);
            message.error('您好像未输入关键字哦！！！');
            // 这里有待优化
            initVideoList(pageParams);
        }
    };
    return (
        <>
            <div className='relative text-white'>
                <Image className='min-h-36' src={videoSearchBg} alt='搜索背景' preview={false} />
                <div className='absolute top-0 left-0 bottom-0 right-0 '>
                    <div className='flex items-center justify-center flex-col md:mt-8'>
                        <div className='text-2xl'>视频中心</div>
                        <div className='my-5'>帮您快速了解汉得产品，助力交付使用全流程</div>
                        <div className='flex items-center w-160'>
                            <Input
                                className='w-full'
                                size='large'
                                allowClear
                                placeholder='请搜索类别/视频名称'
                                onPressEnter={handleSearch}
                                ref={searchInputRef}
                            />
                            <Button
                                size='large'
                                className='px-8'
                                type='primary'
                                onClick={handleSearch}
                            >
                                搜索
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VideoSearch;
