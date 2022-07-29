# 配置项目

## 配置craco

`craco`是一个对 create-react-app 进行自定义配置的社区解决方案。这个有兴趣大家可以自己去看看。

这里可以去看看`Choerodon UI `的配置，里面很详细的，[配置链接](https://open.hand-china.com/choerodon-ui/zh/docs/other/use-with-create-react-app)，值得注意的是要去`package.json`中替换掉脚本的启动命令，差异如下图所示。

```json
// 原来配置的启动方式 
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
 },
// 替换之后的启动方式。使用craco替代react-scripts
"scripts": {
	"start": "craco start",
	"build": "craco build",
	"test": "craco test",
	"eject": "craco eject"
},
```

这一点是值得注意的，要不然配置不生效。

### 配置craco.config.js

```js
const CracoLessPlugin = require("craco-less");

module.exports = {
	babel: {
		presets: [
			[
				"@babel/preset-env",
				{
					modules: false, // 对ES6的模块文件不做转化，以便使用tree shaking、sideEffects等
					useBuiltIns: "entry", // browserslist环境不支持的所有垫片都导入
					corejs: {
						version: 3, // 使用core-js@3
						proposals: true,
					},
				},
			],
		],

		plugins: [
			[
				"import",
				{
					libraryName: "choerodon-ui",
					style: true,
				},
				"c7n",
			],
			[
				"import",
				{
					libraryName: "choerodon-ui/pro",
					style: true,
				},
				"c7n-pro",
			],
		],
	},
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						javascriptEnabled: true,
						modifyVars: {
							"@c7n-icon-url": "~choerodon-ui-font/fonts/icomoon",
						},
					},
				},
				cssLoaderOptions: {
					url: true,
				},
			},
		},
	],
};
```

## 配置ESLint、Prettier、stylelintrc等

具体这么配置，这块我直接讲这么下载依赖和文件

```sh
yarn add babel-eslint eslint eslint-config-airbnb-base eslint-config-prettier eslint-import-resolver-webpack eslint-plugin-import eslint-plugin-prettier prettier stylelint stylelint-config-prettier stylelint-config-rational-order stylelint-config-standard stylelint-prettier -D
```

### .eslintrc.js

```js
module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 8,
        sourceType: 'module',
    },
    extends: ['plugin:@typescript-eslint/recommended', 'prettier', 'plugin:prettier/recommended'],
    rules: {
        'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }], // 允许使用短路、三目
        'no-param-reassign': ['error', { props: false }], // 函数形参可修改
        'no-plusplus': 'off',
        'no-shadow': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
    },
};
```

### .eslintignore

```js
*.sh
node_modules
*.md
.vscode
dist
/public
/docs
.husky
.local
Dockerfile
```

### .prettierrc.js

```js
module.exports = {
  tabWidth: 4,
  useTabs: false,
  printWidth: 100,
  semi: true,
  singleQuote: true,
  arrowParens: 'avoid',
  trailingComma: 'all', // 尾随逗号
  bracketSpacing: true, // 对象中打印空格
  jsxSingleQuote: true,
  jsxBracketSameLine: false, // 在jsx中把'>' 放同一行
  insertPragma: false, // 插入@format标识
  ignorePath: '.prettierignore',
  endOfLine: "auto" 
};
```

### .prettierignore

```sh
/dist/*
/node_modules/**

**/*.svg
**/*.sh

/public/*
```

### .stylelintrc.js

```js
module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-rational-order', 'stylelint-prettier/recommended', 'stylelint-config-prettier'],
    rules: {
        "color-no-invalid-hex": true,
        "selector-pseudo-class-no-unknown": [
            true,
            {
                "ignorePseudoClasses": ["global"]
            }
        ],
        "font-family-name-quotes": 'always-unless-keyword',
        "selector-class-pattern": [ // 命名规范 -
            "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
            {
                "message": "Expected class selector to be kebab-case"
            }
        ],
        'no-empty-source': null,
        'named-grid-areas-no-invalid': null,
        'unicode-bom': 'never',
        'no-descending-specificity': null,
        'font-family-no-missing-generic-family-keyword': null,
        'declaration-colon-space-after': 'always-single-line',
        'declaration-colon-space-before': 'never',
        "string-quotes": "single", // 单引号
        "at-rule-empty-line-before": null,
        "at-rule-name-case": "lower",
        "at-rule-name-space-after": "always-single-line",
        "at-rule-no-vendor-prefix": true,
        "at-rule-no-unknown": null,
        "at-rule-name-case": "lower", // 指定@规则名的大小写
        "length-zero-no-unit": true, // 禁止零长度的单位（可自动修复）
        "shorthand-property-no-redundant-values": true, // 简写属性
        "number-leading-zero": "never", // 小数不带0
        "declaration-block-no-duplicate-properties": true, // 禁止声明快重复属性
        "no-descending-specificity": true, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器。
        "selector-max-id": 0, // 限制一个选择器中 ID 选择器的数量
        "indentation": [4, { // 指定缩进  warning 提醒
            "severity": "warning"
        }],
        "font-family-name-quotes": false,
        "selector-class-pattern": "^[a-z][a-zA-Z0-9]+$",
        "block-opening-brace-newline-after": ["always"],
        "block-closing-brace-newline-before": ["always"]
    },
};
```

### .stylelintignore

```sh
// .stylelintignore
*.js
*.tsx
*.ts
*.json
*.png
*.eot
*.ttf
*.woff
*.css
```

大家看这个配置就行了。

## 配置模块热启动

添加`react-hot-loader`，解放双手，修改代码之后不再频繁`F5`。

```sh
yarn add react-hot-loader
```

然后在`App.tsx`配置这个插件。

```js
import { hot } from "react-hot-loader/root";

function App() {
	return (
		<div className="App">
			...
		</div>
	);
}
export default hot(App);
```

之后就开始实现`HMR`（`hot module replacement`）。