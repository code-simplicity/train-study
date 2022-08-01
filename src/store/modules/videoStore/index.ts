import { message } from 'antd';
import { makeAutoObservable, runInAction } from 'mobx';
import { getVideoList } from 'src/api/video';
import { ResultCodeEnum } from 'src/enum/http';

// 视频列表的接口
interface IVideoList {
    id?: string; // 视频id
    cover?: string; // 背景图片
    playCounts?: string; // 播放数量
    title?: string; // 标题
    labels: string[]; // 标签
    description?: string; // 描述
    sections?: string; // 节数
    top?: boolean; // 是否置顶
    duration?: string; // 时长
    productId?: string; // 产品id
    videoCategoryId?: string; // 视频分类id
}

// 初始化列表的参数接口
interface IInitVideoList {
    page?: number;
    pageSize?: number;
}

interface pageParams {
    current?: number;
    pageSize?: number;
    total?: number;
}

// 视频搜索界面的store
export class VideoCenterStore {
    // 是否开启搜索
    isSearch = false;
    // 学习视频列表
    videoList: IVideoList[] = [];
    // 分页的数据
    pageParams: pageParams = {
        current: 1,
        pageSize: 9,
        total: 100,
    };
    constructor() {
        makeAutoObservable(this);
    }

    /**
     * 获取是否进行搜索
     */
    get getIsSearch() {
        return this.isSearch;
    }

    /**
     * 设置搜索状态
     * @param args
     */
    setIsSearch(args: boolean) {
        this.isSearch = args;
    }

    /**
     * 清除搜索状态
     */
    clearIsSearch() {
        this.isSearch = false;
    }

    /**
     * 获取视频列表
     */
    get getVideoList() {
        return this.videoList;
    }

    /**
     * 设置数据是一个异步请求
     * @param args {page, pageSize}
     * @returns 返回的是一个视频列表的数据
     */
    async setInitVideoList(args: IInitVideoList) {
        // 这里是一个异步请求了，
        try {
            const { code, data, msg } = await getVideoList(args);
            if (code === ResultCodeEnum.SUCCESS) {
                message.success(msg);
            } else {
                message.error(msg);
            }
            console.log('data', data);
            runInAction(() => {
                // 传递分页数据进行分页渲染
                const pageParams = {
                    current: data.page,
                    pageSize: data.pageSize,
                    total: data.total,
                };
                this.setPageParams(pageParams);
            });
        } catch (error: any) {
            return new Error(error);
        }
    }

    /**
     * 获取分页的数据
     */
    get getPageParams() {
        return this.pageParams;
    }

    /**
     * 设置分页数据
     */
    setPageParams(args: pageParams) {
        this.pageParams = args;
    }
}

export const VIDEO_CENTER_STORE = 'videoCenterStore';
