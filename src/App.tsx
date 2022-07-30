/*
 * @Author: bugdr
 * @Date: 2022-07-21 15:53:36
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-29 11:01:17
 * @FilePath: \hello-world\40308-dupeiyi\packages\train-study\src\App.tsx
 * @Description:
 */
import React from 'react';
import { HashRouter } from 'react-router-dom';
import Router from './router';
import './styles/App.less';

function App() {
    return (
        <HashRouter>
            <Router />
        </HashRouter>
    );
}

export default App;
