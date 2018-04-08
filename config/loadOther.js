exports.loadFont = (opt)=>{
    var  opt = opt || {};
    return {
        module:{
            rules : [
                {
                    test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                    loader:'url-loader',
                    query:{
                        limit : 10000,
                        name : opt.name
                    }
                }
            ]
        }
    }
}
exports.loadImage = (opt)=>{
    var opt = opt || {};
    return {
        module:{
            rules:[
                {
                    test: /\.(png|jpe?g|gif)(\?.*)?$/,
                    loader : 'url-loader',
                    query : {
                        limit : 10000,
                        name :opt.name
                    }
                },
            ]
        }
    }
}
exports.sourceMap = (opt)=>({
    devtool: opt.type,
})