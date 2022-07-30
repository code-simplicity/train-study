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

// 数据分页
export function pageFilter(arr: any[], page: number, pageSize: number) {
    // 页数
    let newPage = page;
    newPage = newPage * 1;
    // 每页数量
    let newPageSize = pageSize;
    newPageSize = newPageSize * 1;
    // 总数
    const total = arr.length;
    // 页数
    const pages = Math.floor((total + newPageSize - 1) / newPageSize);
    const start = newPageSize * (newPage - 1);
    const end = start + newPageSize <= total ? start + newPageSize : total;
    // 数据
    const list = [];
    for (let i = start; i < end; i++) {
        list.push(arr[i]);
    }
    return {
        page: newPage,
        pageSize: newPageSize,
        total,
        pages,
        list,
    };
}
