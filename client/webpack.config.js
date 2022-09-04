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
				title: 'Webpack Plugin',
			}),
			//workbox plugin to set up service worker
			new InjectManifest({
				//points to the service worker config file
				swSrc: './src-sw.js',
				//sets the name of the service worker file generated in dist folder
				swDest: 'service-worker.js',
			}),
			new WebpackPwaManifest({
				name: 'Just Another Text Editor',
				short_name: 'JATE',
				description: 'A browser based text editor',
				background_color: '#7eb4e2',
				theme_color: '#7eb4e2',
				start_url: './',
				publicPath: './',
				icons: [
					{
						src: path.resolve('src/images/logo.png'),
						sizes: [96, 128, 192, 256, 384, 512],
						destination: path.join('assets', 'icons'),
					},
					{
						src: path.resolve('src/images/logo.png'),
						size: '1024x1024',
						destination: path.join('assets', 'icons'),
						purpose: 'maskable',
					},
				],
			}),
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
