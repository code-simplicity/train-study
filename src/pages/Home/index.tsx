/*
 * @Author: bugdr
 * @Date: 2022-07-25 16:22:28
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-28 22:48:25
 * @FilePath: \hello-world\40308-dupeiyi\packages\train-study\src\pages\Home\index.tsx
 * @Description:
 */
import React, { FC, useEffect, useState } from 'react';
import { doLogin } from 'src/api/login';
import { getUserInfo } from 'src/api/user';

const Home: FC = () => {
    // const [userInfo, setUserInfo] = useState();
    // const getUser = async () => {
    //     const data = await getUserInfo();
    //     console.log('data :>> ', data);
    // };
    // const handleLogin = async () => {
    //     const params = {
    //         username: 'admin',
    //         password: '123456',
    //     };
    //     const data = await doLogin(params);
    //     console.log('data :>> ', data);
    // };
    // useEffect(() => {
    //     getUser();
    //     handleLogin();
    // }, []);
    return (
        <div>
            <span>我是首页的内容首页</span>
        </div>
    );
};

export default Home;
