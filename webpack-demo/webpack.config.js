const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './index.js'),
    output: {
        path: path.join(__dirname, './dist/'),
        filename: 'index.js'
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    module: {
        rules: [ //匹配规则,文件后缀匹配
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, //从后往前加载
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, //从后往前加载
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader' },
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, //node依赖项不必处理,得exclude。否则打包很慢
            { test: /\.vue$/, use: 'vue-loader' }, //处理vue文件
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js', //设置vue导入最全的包
        }
    }
}