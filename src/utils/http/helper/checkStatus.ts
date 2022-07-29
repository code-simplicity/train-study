/*
 * @Author: bugdr
 * @Date: 2022-07-29 14:51:29
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-29 15:42:29
 * @FilePath: \train-study\src\utils\http\helper\checkStatus.ts
 * @Description:检查后端返回的状态码进行提示
 */
import { message } from 'antd';

const checkStatus = (status: number) => {
    switch (status) {
        case 40000:
            message.error('请求失败，请稍后重试');
            break;
        case 40001:
            message.error('登陆失败，请稍后重试');
            break;
        case 50000:
            message.error('服务异常');
            break;
        default:
            message.error('请求失败');
    }
};

export default checkStatus;
