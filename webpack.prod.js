const HtmlWebPack = require('html-webpack-plugin')   

module.exports = {
    mode: 'production', 

    output: {
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ],
    },

    optimization: {},

    plugins: [
        new HtmlWebPack({
            title: 'Mi Webpack App',
            templace: './src/index.html',
        })
    ]
}