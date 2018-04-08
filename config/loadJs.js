const webpack = require("webpack");
const Clean  = require("clean-webpack-plugin");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const UglifyWebpackPlugn = require("uglifyjs-webpack-plugin");

exports.clean = (path)=>({
    plugins : [new Clean([path])]
})
exports.uglifyJs =()=>({
    plugins:[new UglifyWebpackPlugn()]
})
const getLoader =(flag,type)=>{
    let loaders = ["css-loader"];
    if(type==="scss"){
        loaders.push("scss-loader");
    }
    if(flag){
        return new ExtractTextWebpackPlugin({
            loader : loaders,
            fallback : "vue-style-loader"
        })
    }else{
        return ['vue-style-loader'].concat(loaders)
    }
}
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
                    // loaders :{
                    //     css : getLoader(flag),
                    //     scss : getLoader(flag,"scss"),
                    //     js: 'babel-loader'
                    // },
                }
            }
        ]
    }
})
exports.vendorJs = ()=>{
    return {
        plugins : [new webpack.optimize.CommonsChunkPlugin({
            name : "vendor",
            minChunks : function (modules,count) {
                return modules.source
            }
        })]
    }
}