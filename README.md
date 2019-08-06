# mt

> My first-class Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```
## nuxt.js
# 安装
  1. npx create-nuxt-app xxxx安装项目
  2. 服务器选择koa
  3. UI选择element-ui
  4. 生成的项目分类  
      - assets ===>静态资源
      - components ===> 组件
      - layouts ====> 布局
      - middleware ===> 中间件
      - pages ====> 页面
      - plugins ===> 插件
      - server ===> 服务器
      - store ===> vuex
      - test ===> 测试文件 
# 改变server下面使用ES6
  1. 修改package.json
  2. dev 后面新增 --exec babel-node
  3. 安装 babel-core babel-preset-es2015 babel-cli
  4. 在.babelrc 里面新增 "presets": ["es2015"]
# 修改服务器设置，应在package.json里面
    ```
      "config":{
        "nuxt":{
          "host":"hocalhost",
          "port":"1234"
        }
      }
    ```
For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
