const path = require('path');
const webpack = require('webpack');

const config = {
    devtool: 'eval-source-map',
    target: 'web',
    entry: {
        app: [
          'react-hot-loader/patch',
          'webpack-hot-middleware/client?reload=true',
          './src/index.js'
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                },
                'postcss-loader'
            ],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.js$/,
            use: ['babel-loader'],
            include: path.join(__dirname, 'src')
        }]
    }
};

module.exports = config;
