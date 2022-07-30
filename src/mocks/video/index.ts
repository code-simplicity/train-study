/*
 * @Author: bugdr
 * @Date: 2022-07-29 18:45:16
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-29 20:02:14
 * @FilePath: \train-study\src\mocks\video\index.ts
 * @Description:
 */
import Mock from 'mockjs';
import { pageFilter } from 'src/utils';
import { videoListData } from './data';

// 数据模拟
const videoMock = [
    {
        url: '/video/list', // 获取视频列表
        method: 'post',
        response: ({ body }: Tbody) => {
            const { page, pageSize } = JSON.parse(body);
            // 循环数据生成60条数据
            const listData = videoListData();
            const result = pageFilter(listData, page, pageSize);
            return {
                code: 20000,
                data: result,
                msg: '获取视频成功',
            };
        },
    },
    {
        url: '/video/find/by/productId',
        method: 'post',
        response: ({ body }: Tbody) => {
            const { productId, page, pageSize } = JSON.parse(body);
            // 首先通过filter遍历数组，通过id进行查找数据，返回找到的数据，然后将数据进行分页处理
            const listData = videoListData();
            const result: IVideoList[] = listData.filter(item => {
                return item.productId === productId;
            });
            if (result) {
                const data = pageFilter(result, page, pageSize);
                return {
                    code: 20000,
                    data,
                    msg: '查找产品分类下的视频成功',
                };
            } else {
                return {
                    code: 40000,
                    data: {},
                    msg: '查找产品分类下的视频失败',
                };
            }
        },
    },
    {
        url: '/video/find/by/videoCategoryId',
        method: 'post',
        response: ({ body }: Tbody) => {
            const { videoCategoryId, page, pageSize } = JSON.parse(body);
            // 首先通过filter遍历数组，通过id进行查找数据，返回找到的数据，然后将数据进行分页处理
            const listData = videoListData();
            const result: IVideoList[] = listData.filter(item => {
                return item.videoCategoryId === videoCategoryId;
            });
            if (result) {
                const data = pageFilter(result, page, pageSize);
                return {
                    code: 20000,
                    data,
                    msg: '成功获取视频分类下的视频',
                };
            } else {
                return {
                    code: 40000,
                    data: {},
                    msg: '查找视频分类下的视频失败',
                };
            }
        },
    },
    {
        url: '/video/search',
        method: 'post',
        response: ({ body }: Tbody) => {
            const { title, page, pageSize } = JSON.parse(body);
            // 首先通过filter遍历数组，通过id进行查找数据，返回找到的数据，然后将数据进行分页处理
            const listData = videoListData();
            const result: IVideoList[] = listData.filter(item => {
                return item.title?.includes(title) ? item : null;
            });
            console.log('result ===>', result);
            if (result) {
                const data = pageFilter(result, page, pageSize);
                return {
                    code: 20000,
                    data,
                    msg: '搜索视频成功',
                };
            } else {
                return {
                    code: 40000,
                    data: {},
                    msg: '搜索视频失败',
                };
            }
        },
    },
];

export default videoMock;
