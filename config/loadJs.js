const webpack = require("webpack");
const Clean  = require("clean-webpack-plugin");
const UglifyWebpackPlugn = require("uglifyjs-webpack-plugin");

exports.clean = (path)=>({
    plugins : [new Clean([path])]
})
exports.uglifyJs =()=>({
    plugins:[new UglifyWebpackPlugn()]
})

exports.loadJs = (flag)=>({
    module : {
        rules : [
            {
                test : /\.js$/,
                loader : "babel-loader",
                options : {
                   presets : ["es2015","stage-2"],
                }
            },{
                test : /\.vue$/,
                loader : 'vue-loader',
                options:{
                    extractCSS : flag,
                    postcss: [require("autoprefixer")()],
                }
            }
        ]
    }
})
exports.vendorJs = ()=>{
    return {
        plugins : [new webpack.optimize.CommonsChunkPlugin({
            name : "vendor",
            children :true,
            async : true
        })]
    }
}