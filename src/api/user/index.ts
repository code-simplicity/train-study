import defHttp from 'src/utils/http';

export const getUserInfo = () => {
    return defHttp.get('/api/user/info');
};
