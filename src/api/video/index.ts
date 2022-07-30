import defHttp from 'src/utils/http';

/**
 * 获取视频列表
 * @returns
 */
export const getVideoList = (params: any): any => {
    return defHttp.post<any>('/video/list', params);
};
