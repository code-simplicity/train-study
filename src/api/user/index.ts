/*
 * @Author: bugdr
 * @Date: 2022-07-29 18:52:43
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-30 20:45:27
 * @FilePath: \train-study\src\api\user\index.ts
 * @Description:
 */
import defHttp from 'src/utils/http';

export const getUserInfo = (): any => {
    return defHttp.get<any>('/user/info');
};
