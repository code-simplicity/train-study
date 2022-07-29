/*
 * @Author: bugdr
 * @Date: 2022-07-29 12:35:31
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-29 12:47:16
 * @FilePath: \train-study\src\utils\index.ts
 * @Description:工具集
 */

// 加载路由文件，解析文件
export const resolveRoute = (modules: any) => {
    const routeModuleList: IRouter[] = [];
    // Object.keys(modules).forEach(item => {
    //     console.log('item', item);
    //     const mod = modules[item].default || {};
    //     console.log('mod', mod);
    //     const modList = Array.isArray(mod) ? [...mod] : [mod];
    //     routeModuleList.push(...modList);
    // });
    // return routeModuleList;
    Object.keys(modules).forEach(item => {
        Object.keys(modules[item]).forEach((key: any) => {
            routeModuleList.push(...modules[item][key]);
        });
    });
    return routeModuleList;
};
