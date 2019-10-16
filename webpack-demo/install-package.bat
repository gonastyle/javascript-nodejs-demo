rem  webpack-cli  webpack 已经全局安装，现在要拷贝到本项目中，执行 --save-dev
cnpm install --save-dev webpack
cnpm install --save-dev webpack-cli


rem -D 安装到本地开发依赖
npm install webpack-dev-server -D
npm install jquery -D
npm install style-loader css-loader -D
npm install  less-loader  -D
npm install  less  -D
npm install sass-loader -D

rem cnpm 解决npm安装失败的问题
cnpm install node-sass  -D
cnpm install url-loader -D
cnpm install file-loader -D

rem 加版本号，主要防止依赖出错，导致js编译失败
cnpm install babel-loader@7.1.2 -D
cnpm install babel-core@6.26.3 -D
cnpm install babel-plugin-transform-runtime@6.23.0 -D
cnpm install babel-preset-env@1.7.0 babel-preset-stage-0@6.24.1 -D


rem 编译.vue文件的包
cnpm install vue-loader -D
cnpm install vue-template-compiler -D



rem cnpm i  和 package.json 可以一键安装所有依赖

