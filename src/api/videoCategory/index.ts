import defHttp from 'src/utils/http';

/**
 * 获取视频分类列表
 * @returns
 */
export const getVideoCategoryList = (): any => {
    return defHttp.get<any>('/video/category/list');
};
