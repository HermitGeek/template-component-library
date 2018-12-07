# 基于 vue-cli 3.0 改写的 vue组件库模板（支持按需引入）


### 组件库 支持的引入方式

- 支持 项目中 局部引入 单个组件

- 支持 项目中 全局引入 所有组件

- 支持 项目中 全局引入 单个组件（支持链式引入） 


    ```
    // 全局引入 单个组件 链式引入

    import Vue from 'vue';
    import {
        componentA,
        componentB
    } from 'component-library'



    Vue.use(componentA).use(componentB);
    ```

### 组件库 目录、编写说明

- `package` 文件夹下 是组件库相关代码，说明如下

    ```
    |---/components
    |   |
    |   |---/date-picker
    |   |   |
    |   |   |---/src 每个组件的代码（在此编写组件代码）
    |   |   |
    |   |   |
    |   |   |--- index.js 全局注册每个组件|（不用修改）
    |
    |
    |---/utils 工具集代码（自己封装的代码）
    |
    |
    |--- index.js 组件库入口JS（每次增加新的组件，都需要在这个文件里引入、导出，如 date-picker）
    
    ```



### npm 发包教程

- 此组件库，发包之前需要 先打包，执行指令如下


    ```
    $ npm run lib
    ```

- 配置 `package.json` 文件中发布到 npm 的字段

    - name: 包名，该名字是唯一的。可在 npm 官网搜索名字，如果存在则需换个名字。

    - version: 版本号，每次发布至 npm 需要修改版本号，不能和历史版本号相同。

    - description: 描述。

    - main: 入口文件，该字段需指向我们最终编译后的包文件。

    - keyword：关键字，以空格分离希望用户最终搜索的词。

    - author：作者 必须和npm账户名一直

    - private：是否私有，需要修改为 false 才能发布到 npm



- npm 镜像还原

    > 如果配置了淘宝镜像，先设置回npm镜像，否则不能发包

    ```
    $ npm config set registry http://registry.npmjs.org 
    ```

- 登录 npm  

    > 假设你已经注册了，初次登录需要邮箱验证


    ```
    $ npm login
    ```

- 发布 npm包

    ```
    $ npm publish
    ```



