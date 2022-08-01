/*
 * @Author: bugdr
 * @Date: 2022-07-27 15:27:28
 * @LastEditors: bugdr
 * @LastEditTime: 2022-08-01 10:13:21
 * @FilePath: \train-study\src\store\index.ts
 * @Description:store的构建函数
 */
import { createContext } from 'react';
import { TodoStore, TODO_STORE } from './modules/TodoList';
import { LoadingStore, LOADING_STORE } from './modules/Loading';
import { VideoCenterStore, VIDEO_CENTER_STORE } from './modules/videoStore';

// 创建一个store函数
function createStore() {
    return {
        [TODO_STORE]: new TodoStore(),
        [LOADING_STORE]: new LoadingStore(),
        [VIDEO_CENTER_STORE]: new VideoCenterStore(),
    };
}

// 返回一个Store
const store = createStore();

// 创建stores执行上下文
const StoreContext = createContext(store);

export { store, StoreContext };
