/*
 * @Author: bugdr
 * @Date: 2022-07-21 15:53:36
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-29 11:01:17
 * @FilePath: \hello-world\40308-dupeiyi\packages\train-study\src\App.tsx
 * @Description:
 */
import React, { Suspense } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import SpinLoading from './components/SpinLoading';
import LayoutApp from './layouts';
import Router from './router';
import staticRoutes from './router';
import './styles/App.less';

function App() {
    return (
        <HashRouter>
            <Router />
        </HashRouter>
    );
}

export default App;
