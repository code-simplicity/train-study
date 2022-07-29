/*
 * @Author: bugdr
 * @Date: 2022-07-29 14:48:48
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-29 15:22:17
 * @FilePath: \train-study\types\axios.d.ts
 * @Description:
 */
/// <reference types="react-scripts" />

// * 请求响应参数(不包含data)
interface Result {
    code: string;
    msg: string;
}

// * 请求响应参数
interface IResponseResult<T = any> extends Result<T> {
    data?: T;
}
