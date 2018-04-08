module.exports = () => ({
    devServer: {
        host: "localhost",
        port: 3000,
        hot : true,
        inline:true,
        overlay: {
            errors: true,
            warnings: true,
        },
    }
});
