/*
 * @Author: bugdr
 * @Date: 2022-07-30 16:30:23
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-30 17:12:56
 * @FilePath: \train-study\src\pages\Home\VideoCenter\components\VideoContent\components\ProductList\index.tsx
 * @Description:左侧产品列表
 */
import { message } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import { getProductList } from 'src/api/product';
import { getVideoListByProductId } from 'src/api/video';
import { ResultCodeEnum } from 'src/enum/http';

interface IProductListProps {
    setVideoList: React.Dispatch<React.SetStateAction<IVideoList[]>>;
    initVideoList: any;
    pageParams: any;
    setPageParams: any;
}

const ProductList: FC<IProductListProps> = (props: IProductListProps) => {
    const { setVideoList, initVideoList, pageParams, setPageParams } = props;
    // 激活左侧栏的key
    const [productMenuActivate, setProductMenuActivate] = useState<string>('all');
    // 点击切换实现产品获取视频列表
    const handleActive = async (id: string) => {
        setProductMenuActivate(id);
        const params = {
            productId: id,
            page: pageParams.current,
            pageSize: pageParams.pageSize,
        };
        try {
            const dataParams = {
                current: pageParams.current,
                pageSize: pageParams.pageSize,
            };
            // 如果id等于这个就走初始化
            if (id === 'all') return initVideoList(dataParams);
            const { code, msg, data } = await getVideoListByProductId(params);
            if (code !== ResultCodeEnum.SUCCESS) return message.error(msg);
            message.success(msg);
            setVideoList(data.list);
            setPageParams({
                current: data.page,
                pageSize: data.pageSize,
                total: data.total,
            });
        } catch (error: any) {
            return new Error(error);
        }
    };
    const [productList, setProductList] = useState<IProduct[]>([]);
    // 获取产品列表
    const initProductList = async () => {
        try {
            const { code, msg, data } = await getProductList();
            if (code !== ResultCodeEnum.SUCCESS) return message.error('获取产品列表失败');
            message.success(msg);
            setProductList(data);
        } catch (error: any) {
            return new Error(error);
        }
    };
    useEffect(() => {
        initProductList();
    }, []);
    return (
        <>
            {productList.map(item => {
                return (
                    <div
                        key={item.id}
                        onClick={() => handleActive(item.id)}
                        className={`px-4 py-2 h-10 cursor-pointer ${
                            item.id === productMenuActivate
                                ? 'bg-yellow-100 bg-opacity-65 text-yellow-600 font-black border-l-2 border-yellow-500'
                                : ''
                        } `}
                    >
                        {item.name}
                    </div>
                );
            })}
        </>
    );
};

export default ProductList;
