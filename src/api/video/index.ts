import defHttp from 'src/utils/http';

/**
 * 获取视频列表
 * @returns
 */
export const getVideoList = (params: any): any => {
    return defHttp.post<any>('/video/list', params);
};

/**
 * 通过产品id获取视频列表
 * @returns
 */
export const getVideoListByProductId = (params: any): any => {
    return defHttp.post<any>('/video/find/by/productId', params);
};

/**
 * 通过视频分类id获取视频列表
 * @returns
 */
export const getVideoListByVideoCategoryId = (params: any): any => {
    return defHttp.post<any>('/video/find/by/videoCategoryId', params);
};

/**
 * 搜索视频，通过课程名称/title
 * @returns
 */
export const searchVideoList = (params: any): any => {
    return defHttp.post<any>('/video/search', params);
};
