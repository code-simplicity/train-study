// const CracoLessPlugin = require('craco-less');
const path = require('path');
// mock 插件
const MockServicePlugin = require('mock-service-plugin');
const { whenDev } = require('@craco/craco');
const CracoAntDesignPlugin = require('craco-antd');
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin');

const {
    REACT_APP_ENV, // 环境标识
} = process.env;

// 连接路径
const pathResolve = pathUrl => path.join(__dirname, pathUrl);

// 解析路径
const resolve = dir => path.resolve(__dirname, dir);
module.exports = {
    babel: {
        presets: [
            [
                '@babel/preset-env',
                {
                    modules: false, // 对ES6的模块文件不做转化，以便使用tree shaking、sideEffects等
                    useBuiltIns: 'entry', // browserslist环境不支持的所有垫片都导入
                    corejs: {
                        version: 3, // 使用core-js@3
                        proposals: true,
                    },
                },
            ],
        ],

        plugins: [],
    },
    plugins: [
        {
            plugin: CracoAntDesignPlugin,
            options: {
                customizeTheme: {
                    '@primary-color': '#1DA57A',
                },
            },
        },
    ],
    webpack: {
        alias: {
            '@': resolve('src'),
        },
        plugins: {
            add: [
                new WindiCSSWebpackPlugin({
                    virtualModulePath: 'src',
                }),
            ],
        },
        // plugins: [
        //     ...whenDev(
        //         () => [
        //             new MockServicePlugin({
        //                 path: path.join(__dirname, './src/mocks'),
        //                 port: 8090,
        //             }),
        //         ],
        //         [],
        //     ),
        // ],
    },

    // // 服务器
    // devServer: {
    //     proxy: {
    //         '/api': {
    //             target: 'http://localhost:3000',
    //             // changeOrigin: true, // 开启同源
    //             // 路径重写
    //             // pathRewrite: {
    //             //     '^/api': '',
    //             // },
    //         },
    //     },
    // },
};
