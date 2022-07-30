/*
 * @Author: bugdr
 * @Date: 2022-07-30 16:30:23
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-30 16:57:47
 * @FilePath: \train-study\src\pages\Home\VideoCenter\components\VideoContent\components\ProductList\index.tsx
 * @Description:左侧产品列表
 */
import React, { useState } from 'react';

const ProductList = () => {
    const productMenu = [
        {
            label: '全部产品',
            path: 'all',
            id: 'all',
        },
        {
            label: '飞猪Feida',
            path: 'fzf',
            id: 'fzf',
        },
        {
            label: '汉得协同制造软件',
            path: 'hdxtzzrj',
            id: 'hdxtzzrj',
        },
        {
            label: '汉得智能合同管理软件',
            path: 'hdzhhtglrj',
            id: 'hdzhhtglrj',
        },
        {
            label: '虹珊瑚',
            path: 'hsh',
            id: 'hsh',
        },
        {
            label: '汉得运营管理软件',
            path: 'hdyyrjgl',
            id: 'hdyyrjgl',
        },
        {
            label: '汉得智慧财务套件软件',
            path: 'hdzhcwtjrj',
            id: 'hdzhcwtjrj',
        },
        {
            label: '汉得运输管理软件',
            path: 'hdysglrj',
            id: 'hdysglrj',
        },
        {
            label: '汉得清分结算软件',
            path: 'hdqfjsrj',
            id: 'hdqfjsrj',
        },
        {
            label: '海马汇HIPPLUS',
            path: 'hmhhp',
            id: 'hmhhp',
        },
    ];
    // 激活左侧栏的key
    const [productMenuActivate, setProductMenuActivate] = useState<string>('all');
    const handleActive = (id: string) => {
        setProductMenuActivate(id);
    };
    return (
        <>
            {productMenu.map(item => {
                return (
                    <div
                        key={item.id}
                        onClick={() => handleActive(item.id)}
                        className={`px-4 py-2 h-10 cursor-pointer ${
                            item.id === productMenuActivate
                                ? 'bg-yellow-100 bg-opacity-65 text-yellow-600 font-black'
                                : ''
                        } `}
                    >
                        {item.label}
                    </div>
                );
            })}
        </>
    );
};

export default ProductList;
