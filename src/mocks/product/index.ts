import { productListData } from './data';

// 产品的mock接口
const productMock = [
    {
        url: '/product/list',
        method: 'get',
        response: ({ query }: TQuery) => {
            console.log('query', query);
            const data = productListData();
            return {
                code: 20000,
                data: data,
                msg: '获取产品列表成功',
            };
        },
    },
];

export default productMock;
