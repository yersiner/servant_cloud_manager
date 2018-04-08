
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetWebpackPlugin = require("optimize-css-assets-webpack-plugin")
exports.minifyCss = ()=>({
    plugins: [new OptimizeCssAssetWebpackPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorOptions: { discardComments: {removeAll: true } },
        canPrint: true
    })]
})
exports.loadCss = ()=>({
    module : {
        rules :[
            {
                test :/.css$/g,
                exclude : /node_modules/,
                use : ExtractTextWebpackPlugin.extract({
                    fallback : 'style-loader',
                    use : ['css-loader','postcss-loader']
                })
            },{
                test :/\.scss/g,
                exclude : /node_modules/,
                use : ExtractTextWebpackPlugin.extract({
                    fallback : 'style-loader',
                    use : ['scss-loader','style-loader']
                })
            },{
                test : /\.sass/g,
                exclude : /node_modules/,
                use : ExtractTextWebpackPlugin.extract({
                    fallback : 'style-loader',
                    use : ['sass-loader','style-loader']
                })
            }
        ]
    },
    plugins : [
        new ExtractTextWebpackPlugin({
            allChunks: true,
            filename : "css/[name].css"
        })
    ]
})
