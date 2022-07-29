// const CracoLessPlugin = require('craco-less');
const CracoAntDesignPlugin = require('craco-antd');
const path = require('path');
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
    },
};
