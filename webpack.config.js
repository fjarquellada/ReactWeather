var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx'
    ],
    externals:{
      jquery: 'jQuery'  
    },
    plugins:[
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        modules:[
            path.resolve(__dirname, 'node_modules'),
            path.join(__dirname)  
        ],
        alias:{
            Main:               path.resolve(__dirname, 'app/components/Main.jsx'),
            Nav:                path.resolve(__dirname, 'app/components/Nav.jsx'),
            Weather:            path.resolve(__dirname, 'app/components/Weather.jsx'),
            About:              path.resolve(   __dirname, 'app/components/About.jsx'),
            Examples:           path.resolve(__dirname, 'app/components/Examples.jsx'),
            WeatherForm:        path.resolve(__dirname, 'app/components/WeatherForm.jsx'),
            WeatherMessage:     path.resolve(__dirname, 'app/components/WeatherMessage.jsx'),
            ErrorModal:         path.resolve(__dirname, 'app/components/ErrorModal.jsx'),
            OpenWeatherMap:     path.resolve(__dirname, 'app/api/OpenWeatherMap.jsx'),
            applicationStyles:  path.resolve(__dirname, 'app/styles/app.scss')
            
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map '
};
