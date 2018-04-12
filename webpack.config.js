const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OpenBrowserWebpackPlugin = require("open-browser-webpack-plugin");
const parseJs = require("./config/loadJs");
const parseCss = require("./config/loadCss");
const parseOther = require("./config/loadOther");
const devServer = require("./config/loadServer");


const PATH = {
    app : path.join(__dirname,"src"),
    build : path.join(__dirname,"dist"),
    publicPath : process.env==="production"?'./':'/'
}

const commonConfig = merge([
    {
        entry : [PATH.app],
        output : {
            path:PATH.build,
            publicPath:PATH.publicPath,
            chunkFilename : "js/[name].[hash].js",
            filename : "js/[name].[hash].js"
        },
        resolve :{
            alias :{
                '~' : path.join(__dirname),
                "vue" : 'vue/dist/vue.js'
            },
            extensions : ['.js','.css','.vue'],
        },
        plugins : [
            new HtmlWebpackPlugin({
                //filename : './dist/index.html',
                template : './dist/index.html',
                inject : true
            }),
            new webpack.WatchIgnorePlugin([
                path.join(__dirname,"node_modules")
            ]),
            new OpenBrowserWebpackPlugin({
                url : "http://localhost:3000"
            }),
            new webpack.HotModuleReplacementPlugin(),//热加载插件
            new webpack.optimize.OccurrenceOrderPlugin(),
        ]
    }
]);
const produceConfig = merge([
    parseCss.loadCss(),
    parseCss.minifyCss(),
    parseJs.loadJs(true),
    parseJs.uglifyJs(),
    parseOther.loadFont({name:path.resolve(__dirname,'dev/fonts/[name].[ext]')}),
    parseOther.loadImage({name:path.resolve(__dirname,'dev/images/[name].[ext]')}),
    parseJs.vendorJs(),
    parseOther.sourceMap({type: "source-map"}),
]);

const devConfig = merge([
    devServer(),
    parseCss.loadCss(),
    parseJs.loadJs(true),
    parseOther.loadFont({name:path.resolve(__dirname,'dev/fonts/[name].[ext]')}),
    parseOther.loadImage({name:path.resolve(__dirname,'dev/fonts/[name].[ext]')}),
    parseJs.vendorJs(),
    parseJs.clean("dist/js/**.js"),
    parseOther.sourceMap({type: "eval-source-map"}),
])
module.exports = (env)=>{
    if(env==="production"){
        return  merge(commonConfig,produceConfig);
    }else{
        return merge(commonConfig,devConfig)
    }
}