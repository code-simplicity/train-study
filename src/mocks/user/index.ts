/*
 * @Author: bugdr
 * @Date: 2022-07-29 18:45:16
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-29 20:02:14
 * @FilePath: \train-study\src\mocks\user\index.ts
 * @Description:
 */
import Mock from 'mockjs';

// mock方法,详细的可以看官方文档
const Random = Mock.Random;

interface IUserList {
    username: string;
    password: string;
    token?: string;
    roles?: string;
    rolesName?: string;
}

// 定义数据源
const userList: IUserList[] = [
    {
        username: 'admin',
        password: '123456',
        token: 'token_admin',
        roles: 'admin',
        rolesName: '管理员',
    },
    {
        username: 'user',
        password: '123456',
        token: 'token_user',
        roles: 'user',
        rolesName: '普通用户',
    },
];

/**
 * @url /login
 */
// export const Login = Mock.mock('/api/user/login', 'post', (options: any) => {
//     const { body } = options;
//     const user = userList.find((user: IUserList) => {
//         return body.username === user.username && body.password === user.password;
//     });
//     if (user) {
//         return {
//             code: 20000,
//             data: {
//                 username: user.username,
//                 token: user.token,
//                 roles: user.roles,
//                 rolesName: user.rolesName,
//             },
//             msg: '登陆成功',
//         };
//     } else {
//         return {
//             code: 40000,
//             data: {},
//             msg: '登陆失败，请检查用户名或者密码重试',
//         };
//     }
// });

// 数据模拟
const userMock = [
    {
        url: '/user/login',
        method: 'post',
        response: (body: any) => {
            const user = userList.find((user: IUserList) => {
                return body.username === user.username && body.password === user.password;
            });
            if (user) {
                return {
                    code: 20000,
                    data: {
                        username: user.username,
                        token: user.token,
                        roles: user.roles,
                        rolesName: user.rolesName,
                    },
                    msg: '登陆成功',
                };
            } else {
                return {
                    code: 40000,
                    data: {},
                    msg: '登陆失败，请检查用户名或者密码重试',
                };
            }
        },
    },
    {
        url: '/user/info',
        method: 'get',
        response: (query: any) => {
            const { token } = query;
            const userInfo = userList.find(user => {
                return user;
                // return user.token === token;
            });
            if (userInfo) {
                return {
                    code: 20000,
                    data: {
                        userInfo,
                    },
                    msg: '获取用户信息成功',
                };
            }
        },
    },
];

export default userMock;
