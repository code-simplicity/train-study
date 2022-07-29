/*
 * @Author: bugdr
 * @Date: 2022-07-29 14:50:49
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-29 16:15:31
 * @FilePath: \train-study\src\utils\http\helper\axiosCancel.ts
 * @Description:axios的取消
 */
import axios, { AxiosRequestConfig, Canceler } from 'axios';
import { isFunction } from 'lodash';
import qs from 'qs';

// 声明一个 Map 用于存储每个请求的标识 和 取消函数
let pendingMap = new Map<string, Canceler>();

// 参数序列化
export const getPendingUrl = (config: AxiosRequestConfig) =>
    [config.method, config.url, qs.stringify(config.data), qs.stringify(config.params)].join('&');

class AxiosCanceler {
    /**
     * @description: 添加等待请求
     * @param {Object} config
     */
    addPending(config: AxiosRequestConfig) {
        // 在请求开始前，对之前的请求做检查取消操作
        this.removePending(config);
        const url = getPendingUrl(config);
        config.cancelToken =
            config.cancelToken ||
            new axios.CancelToken(cancel => {
                if (!pendingMap.has(url)) {
                    // 如果 pending 中不存在当前请求，则添加进去
                    pendingMap.set(url, cancel);
                }
            });
    }

    /**
     * 移除请求
     * @param config config
     */
    removePending(config: AxiosRequestConfig) {
        const url = getPendingUrl(config);

        if (pendingMap.has(url)) {
            // 如果在 pending 中存在当前请求标识，需要取消当前请求，并且移除
            const cancel = pendingMap.get(url);
            cancel && cancel();
            pendingMap.delete(url);
        }
    }

    /**
     * 清空所有pending
     */
    removeAllPending() {
        pendingMap.forEach(cancel => {
            // 判断这个是不是一个函数
            cancel && isFunction(cancel) && cancel();
        });
        pendingMap.clear();
    }

    /**
     * @description: 重置
     */
    reset(): void {
        pendingMap = new Map<string, Canceler>();
    }
}
// new一个实例
const axiosCanceler = new AxiosCanceler();

export default axiosCanceler;
