import React, { useContext } from 'react';
import { StoreContext } from 'src/store';

// 全局loading的加载
// 使用useContext的hooks进行触发
const useLoading = () => useContext(StoreContext);

export default useLoading;
