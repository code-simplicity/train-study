/*
 * @Author: bugdr
 * @Date: 2022-07-27 15:27:40
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-28 09:30:56
 * @FilePath: \hello-world\40308-dupeiyi\packages\train-study\src\store\modules\TodoList\TodoList.ts
 * @Description:
 */
import { action, computed, makeAutoObservable, makeObservable, observable } from 'mobx';

export class TodoStore {
    id = 0;
    // 初始化数据
    todos: ITodo[] = [];
    constructor() {
        // makeObservable(this, {
        //     todos: observable,
        //     unCompletedCount: computed,
        //     completedCount: computed,
        //     addNewTodo: action,
        //     deleteTodo: action,
        //     changeStatusById: action,
        // });
        makeAutoObservable(this);
    }

    // 计算未完成的个数
    get unCompletedCount() {
        return this.todos.filter(todo => todo.completed).length;
    }

    // 计算完成的个数
    get completedCount() {
        return this.todos.filter(todo => !todo.completed).length;
    }

    // 添加一个新的todo
    addNewTodo(args: string) {
        // 判断添加
        const newId = ++this.id;
        const todo = {
            id: newId,
            name: `新的任务${newId}`,
            description: `你有一个新的任务${args}`,
            computed: false,
        };
        // 头部插入
        this.todos.unshift(todo);
    }

    // 删除一个新的todo
    deleteTodo(id: number) {
        // 过滤器，不相等的返回,删除操作
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    // 改变完成状态
    changeStatusById(id: number) {
        // 选好遍历
        this.todos = this.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
    }
}

// 导入名称，作为key使用
export const TODO_STORE = 'todoStore';
