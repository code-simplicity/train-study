/*
 * @Author: bugdr
 * @Date: 2022-07-27 15:27:28
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-28 09:50:06
 * @FilePath: \hello-world\40308-dupeiyi\packages\train-study\src\store\index.ts
 * @Description:store的构建函数
 */
import { createContext, useContext } from 'react';
import { TodoStore, TODO_STORE } from './modules/TodoList/TodoList';

// 创建一个store函数
function createStore() {
    return {
        [TODO_STORE]: new TodoStore(),
    };
}

// 返回一个Store
const store = createStore();

// 创建stores执行上下文
const StoreContext = createContext(store);

// 使用useContext的hooks进行触发
// const useStore = () => useContext(StoreContext);

// 使用这个useStore
// function useTodoStore() {
//     const { todoStore } = useStore();
//     return todoStore;
// }

export { store, StoreContext };
