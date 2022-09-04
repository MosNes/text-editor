const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.

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
