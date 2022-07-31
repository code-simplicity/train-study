import { makeAutoObservable } from 'mobx';

/**
 * mobx的loading管理
 */
export class LoadingStore {
    isLoading = false;
    constructor() {
        makeAutoObservable(this);
    }
    // 获取loading状态
    get getLoadingStatus() {
        return this.isLoading;
    }
    // 设置loading状态
    setLoadingStatus(args: boolean) {
        this.isLoading = args;
    }
}

// 导入名称，作为key使用
export const LOADING_STORE = 'loadingStore';
