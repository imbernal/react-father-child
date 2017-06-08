const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');


module.exports={
    entry:'./app/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'index_bundle.js'
    },
    module:{
        rules:[
            {test:/\.(js)$/, use:'babel-loader'},
            {test:/\.css$/, use:['style-loader','css-loader']}
        ],
        loaders: [{
            test: /\.css$/,
            loader: 'style!css?sourceMap'
          }, {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/font-woff"
          }, {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/font-woff"
          }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/octet-stream"
          }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file"
          }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=image/svg+xml"
          }]

    },
    plugins:[new HtmlWebpackPlugin({
        template:'app/index.html'
    })]
};
