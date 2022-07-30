/*
 * @Author: bugdr
 * @Date: 2022-07-30 20:49:19
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-30 20:54:02
 * @FilePath: \train-study\src\mocks\video\index.ts
 * @Description:
 */
import Mock from 'mockjs'; //引入Mock

export default Mock.mock('/list', {
    // 随机生成长度为3的list数组，数组元素是3-10个字范围内的中文单词
    'list|3': ['@cword(3,10)'],
});
