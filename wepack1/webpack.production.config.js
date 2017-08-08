var path = require('path');
//npm install html-webpack-plugin --save-dev
var HtmlwebpackPlugin = require('html-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var webpack = require('webpack');
//Template的文件夹路径
var TEM_PATH = path.resolve(ROOT_PATH, 'templates')
  //部署上线使用webpack的时候我们不需要一些dev-tools,dev-server和jshint校验等。
module.exports = {
  //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  //分离app.js和第三方库
  entry: {
    app: path.resolve(APP_PATH, 'index.js'),
    mobile: path.resolve(APP_PATH, 'mobile.js'),
    //添加要打包在vendors里面的库
    vendors: ['jquery', 'moment']
  },
  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: BUILD_PATH,
    //只要再加上hash这个参数就可以了
    filename: '[name].[hash].js'
  },
  //启用source-map采用source-map的形式直接显示你出错代码的位置
  devtool: 'eval-source-map',
  module: {
    //和loaders一样的语法，很简单
    perLoaders: [{
      test: /\.jsx?$/,
      include: APP_PATH,
      loader: 'jshint-loader'
    }],

    //npm install css-loader style-loader --save-dev
    //npm install less-loader --save-dev
    //为css启用source-map
    loaders: [{
        test: /\.less$/,
        //loaders: ['style', 'css', 'less'],
        loaders: ['style', 'css?sourceMap', 'less?sourceMap'],
        include: APP_PATH
      },
      //npm install url-loader --save-dev
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=40000'
      },
      //npm install babel-loader babel-preset-es2015 --save-dev
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: APP_PATH,
        query: {
          presets: ['es2015']
        }
      },

    ]
  },


  //添加我们的插件 会自动生成一个html文件
  plugins: [
    //这个使用uglifyJs压缩你的js代码
    new webpack.optimize.UglifyJsPlugin({
      minimize: true
    }),
    //把入口文件里面的数组打包成verdors.js
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new HtmlwebpackPlugin({
      title: 'Hello World app',
      template: path.resolve(TEM_PATH, 'index.html'),
      filename: 'index.html',
      //chunks这个参数告诉插件要引用entry里面的哪几个入口
      chunks: ['app', 'vendors'],
      //要把script插入到标签里
      inject: 'body'
    }),
    new HtmlwebpackPlugin({
      title: 'Hello Mobile app',
      template: path.resolve(TEM_PATH, 'mobile.html'),
      filename: 'mobile.html',
      chunks: ['mobile', 'vendors'],
      inject: 'body'
    })
  ]
};