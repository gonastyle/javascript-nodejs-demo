var path = require('path');
var HtmlWebPackPlugin = require('html-webpack-plugin');//在内存中注入html,方便测试


var htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, './index.html'),
    filename: 'index.html'
});


module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './index.js'),
    output: {
        path: path.join(__dirname, './dist/'),
        filename: 'main.js'
    },
    plugins: [
        htmlPlugin
    ],
    module: {
        rules: [
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }, //exclude:/node_modules/ 排除第三方库
            {test:/\.css$/,use:['style-loader','css-loader']},   
            {test:/\.scss$/,use:['style-loader','css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]','sass-loader']},//打包处理scss,modules为scss启用模块化
            {test:/\.ttf|woff|woff2|eot|svg$/,use:'url-loader'},//打包字体文件
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json','.vue'],//表示整个文件后缀可以省略
        alias: {
            '@': path.join(__dirname, './')
        }
    }
}