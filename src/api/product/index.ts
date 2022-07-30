/*
 * @Author: bugdr
 * @Date: 2022-07-29 18:52:43
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-30 20:45:27
 * @FilePath: \train-study\src\api\user\index.ts
 * @Description:
 */
import defHttp from 'src/utils/http';

/**
 * 获取产品列表
 * @returns
 */
export const getProductList = (): any => {
    return defHttp.get<any>('/product/list');
};
