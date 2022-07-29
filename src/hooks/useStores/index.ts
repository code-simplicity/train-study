/*
 * @Author: bugdr
 * @Date: 2022-07-28 09:12:14
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-28 09:21:32
 * @FilePath: \hello-world\40308-dupeiyi\packages\train-study\src\hooks\useStores\index.ts
 * @Description:
 */
import React, { useContext } from 'react';
import { StoreContext } from 'src/store';

// 使用useContext的hooks进行触发
const useStores = () => useContext(StoreContext);

export default useStores;
