module.exports = [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
    },
    {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
    }
]