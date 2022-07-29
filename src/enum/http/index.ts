/*
 * @Author: bugdr
 * @Date: 2022-07-29 15:45:24
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-29 15:50:14
 * @FilePath: \train-study\src\enum\http\index.ts
 * @Description:http的枚举常量
 */

/**
 * 返回状态码
 */
export enum ResultCodeEnum {
    SUCCESS = 20000, // 成功
    FAILED = 40000, // 失败
    ERROR = 50000, // 服务异常
}

/**
 * 请求方法
 */
export enum RequestEnum {
    GET = 'GET',
    POST = 'POST',
    PATCH = 'PATCH',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

/**
 * 常用的contentTyp类型
 */
export enum ContentTypeEnum {
    // json
    JSON = 'application/json;charset=UTF-8',
    // text
    TEXT = 'text/plain;charset=UTF-8',
    // form-data 一般配合qs
    FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
    // form-data 上传
    FORM_DATA = 'multipart/form-data;charset=UTF-8',
}
