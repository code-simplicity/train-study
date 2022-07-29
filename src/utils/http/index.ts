/*
 * @Author: bugdr
 * @Date: 2022-07-29 14:48:07
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-29 16:21:40
 * @FilePath: \train-study\src\utils\http\index.ts
 * @Description:
 */
import { message } from 'antd';
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ResultCodeEnum } from 'src/enum/http';
import axiosConfig from './config';
import axiosCanceler from './helper/axiosCancel';
import checkStatus from './helper/checkStatus';

class RequestHttp {
    // axios的实例
    service: AxiosInstance;
    constructor(config: AxiosRequestConfig) {
        // 实例化axios
        this.service = axios.create(config);

        // 请求拦截
        this.service.interceptors.request.use(
            (config: AxiosRequestConfig) => {
                // 配置拦截
                // 将当前请求配置等待
                axiosCanceler.addPending(config);
                return { ...config };
            },
            (error: AxiosError) => {
                return Promise.reject(error);
            },
        );

        // 响应拦截
        this.service.interceptors.response.use(
            (response: AxiosResponse) => {
                const { data, config } = response;
                console.log('data', data);
                // 请求完成之后移除本次请求
                axiosCanceler.removePending(config);
                // 全局拦截返回的data.code的字段值不为20000,那么就默认是请求失败了
                if (data.code && data.code !== ResultCodeEnum.SUCCESS) {
                    // 提示出错
                    message.error(data.message);
                    return Promise.reject(data);
                }
                // 请求成功
                return data;
            },
            async (error: AxiosError) => {
                const { response } = error;
                console.log('response', response);
                // 判断请求是否超时
                if (error.message.indexOf('timeout') !== -1) message.error('请求超时，请稍后再试');
                // 工具返回错误的信息，执行对应的提示
                if (response) return checkStatus(response.status);
                // 服务器结果都没有返回(可能服务器错误可能客户端断网) 断网处理:可以跳转到断网页面
                if (!window.navigator.onLine) return (window.location.hash = '/500');
                return Promise.reject(error);
            },
        );
    }

    // get方法封装
    get<T>(url: string, params?: object, _object = {}): Promise<IResponseResult<T>> {
        return this.service.get(url, { params, ..._object });
    }
    // post方法封装
    post<T>(url: string, params?: object, _object = {}): Promise<IResponseResult<T>> {
        return this.service.post(url, params, _object);
    }
    // put方法封装
    put<T>(url: string, params?: object, _object = {}): Promise<IResponseResult<T>> {
        return this.service.put(url, params, _object);
    }
    delete<T>(url: string, params?: object, _object = {}): Promise<IResponseResult<T>> {
        return this.service.delete(url, { params, ..._object });
    }
}

// 创建一个实例
const RAxios = new RequestHttp(axiosConfig);

export default RAxios;
