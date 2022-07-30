import { videoCategoryListData } from './data';

// 视频分类的mock接口
const videoCategoryMock = [
    {
        url: '/video/category/list',
        method: 'get',
        response: ({ query }: TQuery) => {
            const data = videoCategoryListData();
            return {
                code: 20000,
                data: data,
                msg: '获取视频分类列表成功',
            };
        },
    },
];

export default videoCategoryMock;
