/*
 * @Author: bugdr
 * @Date: 2022-07-25 16:17:39
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-29 09:40:02
 * @FilePath: \hello-world\40308-dupeiyi\packages\train-study\src\pages\TodoList\index.tsx
 * @Description:
 */
import React, { FC, useRef, useState } from 'react';
// import List from './List';
import { Button, Input } from 'antd';
import styles from './index.module.less';
import { observer } from 'mobx-react-lite';
import useStores from 'src/hooks/useStores';
import { CheckOutlined } from '@ant-design/icons';

function TodoList() {
    // 解构hooks
    const { todoStore } = useStores();
    const todoInputRef = useRef<any>();
    // 添加内容
    const addTodo = () => {
        const { current } = todoInputRef;
        // 触发添加
        if (current!.input.value === '') {
            return;
        }
        todoStore.addNewTodo(current!.input.value);
        // 删除输入框的值
        current.input.value = '';
    };
    const [actives, setActives] = useState<number>(0);
    const onChangeMouseEnter = (id: number) => {
        // 赋值给激活的actives
        setActives(id);
    };
    // 离开函数之后设置actives为数字0
    const onChangeMouseLeave = () => {
        setActives(0);
    };
    function changeStatus() {
        if (actives !== 0) {
            todoStore.changeStatusById(actives);
        }
    }
    function deleteTodo() {
        if (actives !== 0) {
            todoStore.deleteTodo(actives);
        }
    }
    return (
        <div className={styles['todo-list-container']}>
            <div className={styles['todo-list-input']}>
                <Input
                    allowClear
                    ref={todoInputRef}
                    placeholder='请输入今天需要代办的事情并且点击右侧添加按钮'
                    onPressEnter={addTodo}
                />
                <Button type='primary' onClick={addTodo}>
                    添加todo
                </Button>
            </div>
            <div className={styles['todo-list-completed']}>
                <span className={styles['todo-list-completed-done']}>
                    完成: {todoStore.completedCount}
                </span>
                <span className={styles['todo-list-completed-undone']}>
                    未完成: {todoStore.unCompletedCount}
                </span>
            </div>
            {todoStore.todos.map((todo: ITodo) => {
                return (
                    // <List
                    //     key={todo.id}
                    //     todo={todo}
                    //     onRemove={todoStore.deleteTodo}
                    //     switchStatus={todoStore.changeStatusById}
                    // />
                    <div
                        className={styles['list-container']}
                        onMouseEnter={() => onChangeMouseEnter(todo.id)}
                        onMouseLeave={onChangeMouseLeave}
                        key={todo.id}
                    >
                        {!todo.completed ? <CheckOutlined /> : null}
                        <div>
                            <span>{todo.name}--</span>
                            <span>{todo.description}</span>
                        </div>
                        {actives === todo.id ? (
                            <div>
                                {todo.completed ? (
                                    <Button
                                        style={{
                                            marginRight: 10,
                                            marginLeft: 10,
                                        }}
                                        size='small'
                                        type='primary'
                                        onClick={changeStatus}
                                    >
                                        点击完成
                                    </Button>
                                ) : (
                                    <Button
                                        style={{
                                            marginRight: 10,
                                            marginLeft: 10,
                                        }}
                                        size='small'
                                        type='primary'
                                        onClick={changeStatus}
                                    >
                                        取消完成
                                    </Button>
                                )}
                                <Button size='small' type='primary' danger onClick={deleteTodo}>
                                    删除
                                </Button>
                            </div>
                        ) : null}
                    </div>
                );
            })}
        </div>
    );
}

export default observer(TodoList);
