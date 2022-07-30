/*
 * @Author: bugdr
 * @Date: 2022-07-30 16:30:23
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-30 17:12:56
 * @FilePath: \train-study\src\pages\Home\VideoCenter\components\VideoContent\components\ProductList\index.tsx
 * @Description:左侧产品列表
 */
import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import { getProductList } from 'src/api/product';
import { ResultCodeEnum } from 'src/enum/http';

const ProductList = () => {
    // 激活左侧栏的key
    const [productMenuActivate, setProductMenuActivate] = useState<string>('all');
    const handleActive = (id: string) => {
        setProductMenuActivate(id);
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
