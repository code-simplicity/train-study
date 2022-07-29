# 创建项目

首先就是先暂时使用官方的脚手架初始化自己的项目，直接使用以下两个命令创建即可，这边我们统一创建一个ts版本的来进行后期的项目开发。

大家也可以直接pull一下我们的仓库把代码拉取下来之后，然后切换到我的远程分支，之后在把我创建的packages目录之下的所有文件夹拷贝到自己的分支，然后提交到远程出库就行，但是我建议大家还是自己搭建一下。

## 项目的目录结构

为了更好的统一大家的一种风格，我建议按照我目前的这种文件模式进行创建

![](https://bugdr-project-1305152720.cos.ap-beijing.myqcloud.com/code-images\202207211702679.png)

## 初始化一个项目

使用create-react-app这个脚手架进行项目的创建，跟着下面步骤进行即可。

```sh
npx create-react-app xxx --template typescript
or
yarn create-react-app xxx --template typescript
```

创建项目之后我们会得到一个react的demo，之后我们需要集成一些库，比如下面这些，我就拿一个库来举例，比如[choerodon-ui](https://open.hand-china.com/choerodon-ui/zh/docs/other/use-with-create-react-app)的组件库，大家也可以直接跟着官网去查看，官网有相应的步骤，只要跟着对应的步骤进行操作基本上就没有多大的问题，那么话不多说，我们举例，首先我先切换到我当前创建项目的根目录，那就是在/40308-dupeiyi/packages/train-study，先切换到当前路径。

```sh
cd 40308-dupeiyi/packages/train-study
```

然后执行如下命令用来启动项目。如果是使用我项目的可以看到和初始化的有一定的差别，这边不在过多赘述。

```sh
yarn start
```

之后我们再引入这个组件库，使用下面的命令。

```sh
yarn add choerodon-ui
```

下载好之后就可以在项目中使用了，这里怎么使用建议查看官网，官网说的很详细，那么我们接下来要配置一些tsconfig.json和eslint这些东西，然后这边就到此。