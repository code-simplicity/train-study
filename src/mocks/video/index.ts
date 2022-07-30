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
            console.log('videoListData', videoListData());
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
        url: '/video/',
    },
];

export default videoMock;
