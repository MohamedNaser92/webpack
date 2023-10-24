const path = require('path');
const Htmlwebpackplugin = require('html-webpack-plugin');
const webpackBundleAnlayer =
	require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
	mode: 'development',
	entry: {
		bundle: path.resolve(__dirname, 'src/index.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[contenthash].js',
		clean: true,
		assetModuleFilename: '[name][ext]',
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'dist'),
		},
		port: 3000,
		open: true,
		hot: true,
		compress: true,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(svg|gif|png|jpg|jpeg)$/i,
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		new Htmlwebpackplugin({
			title: 'Hello from webpack lab',
			filename: 'index.html',
			template: 'src/template.html',
		}),
		// new webpackBundleAnlayer(),
	],
};
