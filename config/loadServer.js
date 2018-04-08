module.exports = () => ({
    devServer: {
        host: "localhost",
        port: 3000,
        hot : true,
        inline:true
    }
});
/*
*  overlay: {
            errors: true,
            warnings: true,
        },
        watchOptions: {
            // Delay the rebuild after the first change
            aggregateTimeout: 300,

            // Poll using interval (in ms, accepts boolean too)
            poll: 1000,
        },
        // 仅在语法有错误时 才会进行提示，减少不必要的控制台输出
        stats: "errors-only",
        disableHostCheck: true,*/