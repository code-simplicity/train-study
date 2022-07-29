/*
 * @Author: bugdr
 * @Date: 2022-07-27 19:06:12
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-27 21:46:37
 * @FilePath: \hello-world\40308-dupeiyi\packages\train-study\src\pages\TodoList\List\index.tsx
 * @Description:
 */
import { Button } from 'antd';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useState } from 'react';
import styles from './index.module.less';

interface ListProps {
    key: number;
    todo: ITodo;
    onRemove: any;
    switchStatus: any;
}

function List(props: ListProps) {
    const { todo, onRemove, switchStatus } = props;
    const [actives, setActives] = useState<number>();
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
            switchStatus(actives);
        }
    }
    function deleteTodo() {
        if (actives !== 0) {
            onRemove(actives);
        }
    }
    return (
        <>
            <div
                className={styles['list-container']}
                onMouseEnter={() => onChangeMouseEnter(todo.id)}
                onMouseLeave={onChangeMouseLeave}
            >
                <div>
                    <span>{todo.name}--</span>
                    <span>{todo.description}</span>
                </div>
                {actives === todo.id ? (
                    <div>
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
                        <Button size='small' type='primary' danger onClick={deleteTodo}>
                            删除
                        </Button>
                    </div>
                ) : null}
            </div>
        </>
    );
}

export default observer(List);
