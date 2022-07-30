import defHttp from 'src/utils/http';
import { ILoginType } from './type';

/**
 * 用户登录
 * @param params
 * @returns
 */
export const doLogin = (params: ILoginType) => {
    return defHttp.post('/api/user/login', params);
};
