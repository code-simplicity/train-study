/*
 * @Author: bugdr
 * @Date: 2022-07-21 15:53:36
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-29 11:02:35
 * @FilePath: \hello-world\40308-dupeiyi\packages\train-study\src\index.tsx
 * @Description:
 */
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.less';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'antd';
// 导入mocks文件夹
import './mocks';
import './virtual:windi.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <ConfigProvider>
        <StrictMode>
            <App />
        </StrictMode>
    </ConfigProvider>,
);

reportWebVitals();
