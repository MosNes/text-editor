const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
	return {
		mode: 'development',
		entry: {
			main: './src/js/index.js',
			install: './src/js/install.js',
		},
		output: {
			filename: '[name].bundle.js',
			path: path.resolve(__dirname, 'dist'),
		},
		plugins: [
      //HTML plugin to generate index.html in dist folder
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'Webpack Plugin'
      }),
      //workbox plugin to set up service worker
      new InjectManifest({
        //points to the service worker config file
        swSrc: './src/src-sw.js',
        //sets the name of the service worker file generated in dist folder
        swDest: 'service-worker.js'
      })

    ],

		module: {
			rules: [
				//CSS Loader
				{
					test: /\.css$/i,
					use: ['style-loader', 'css-loader'],
				},
				//Babel Loader
				{
					test: /\.m?js$/,
					exclude: /node-modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								['@babel/preset-env', { targets: 'defaults' }],
							],
						},
					},
				},
			],
		},
	};
};
