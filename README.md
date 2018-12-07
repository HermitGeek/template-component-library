# 基于 vue-cli 3.0 改写的 vue组件库模板（支持按需引入）


### 组件库 支持的引入方式

- 支持 项目中 全局引入 所有组件

- 支持 项目中 局部引入 单个组件

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


### npm 发包教程

- 登录 npm  

    > 假设你已经注册了，初次登录需要邮箱验证


    ```
    $ npm login
    ```

- 发布 npm包

    ```
    $ npm publish
    ```


