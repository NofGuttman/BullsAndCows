let path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname + "src"),
        filename: "bundle.js"
    },
    watch: true,
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: "babel-loader"
        }]
    },
    devServer: {
        contentBase: "./src",
        compress: true,
        open: true,
        port: 3000
    }
}