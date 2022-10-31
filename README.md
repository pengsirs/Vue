# Vue实训-音乐后台管理
音乐后台管理系统，使用Vue+ElementUI+Echars开发，拥有用户登录、后台首页、用户管理、歌曲管理、专辑管理、评论管理、系统设置等模块。
## 项目地址
Gitee：https://gitee.com/pengsirs/vue

GitHub：https://github.com/pengsirs/Vue

## 实验目的
1. 熟悉Vue开发工具，学会安装Vue-CLI脚手架工具。
2. 学会使用Vue-CLI脚手架工具在自己的电脑上建立项目，并运行调试。
3. 使用Vue+ElementUI便携一个后台管理系统
4. 使用Vue整合Echars

## 实验内容
1. 使用Vue-CLI脚手架工具，用命令的方法搭建一个Web项目
2. 使用Vue创建音乐后台管理系统，使用Vue+ElementUI+Echars开发，拥有用户登录、后台首页、用户管理、歌曲管理、专辑管理、评论管理、系统设置等模块并使用ElementUI构建页面
3. 使用Vue中的Router（路由）进行编写页面的跳转等功能


## 项目使用
下载并解压源码

打开命令窗口：windows使用win+R然后输入cmd，macOS使用Command+空格输入终端即可

安装依赖： `npm install`

打开终端后cd到项目目录输入下面的命令运行项目

`npm run serve`

直到提示网址链接即可复制链接到浏览器

## 项目详细过程及步骤
1. 安装nodejs并配置环境变量

2. 安装vue脚手架
    打开命令行工具，通过npm方式全局安装@vue/cli脚手架，具体命令如下：
    `npm install @vue/cli@3.10 –g`
    安装完成后，检测是否安装成功，使用如下命令来查看vue-cli的版本号：
    `vue –V（或者vue --version)`

3. 创建项目
    使用命令创建创建
    `vue create 项目名`
    使用可视化UI界面创建
    在命令窗口输入Vue UI即可
    ### 项目目录结构
        config 配置目录，包括端口号等

        node_modules npm 加载的项目依赖

        src/assets 放置图片等文件

        src/components 项目组件

        src/router 项目路由配置

        src/views 项目页面

        src/App.vue 项目入口文件

        src/main.js 项目核心文件

        README.md 项目的说明文档

4. 安装并引入ElementUI
    通过npm安装ElementUI，命令如下：
    `npm i element-ui -S`
    在main.js中进行全局引入

    ```shell
    import ElementUI from 'element-ui';
    import 'element-ui/lib/theme-chalk/index.css';
    ```
    
5. 创建登录模块

6. 创建首页模块

7. 整合Echars

8. 创建用户管理、歌曲管理、专辑管理、评论管理、系统设置等模块