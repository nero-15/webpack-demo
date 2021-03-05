const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {

	console.log('NODE_ENV: ', env.NODE_ENV); // 'local'
	console.log('Production: ', env.production); // true
	return {
		mode: 'development',
		entry: {
			index: './src/index.js',
		},
		devtool: 'inline-source-map',
		devServer: {
			contentBase: './dist',
		},
		plugins: [
			new HtmlWebpackPlugin({
				title: 'Caching',
			}),
		],
		output: {
			filename: '[name].[contenthash].js',
			path: path.resolve(__dirname, 'dist'),
			clean: true,
			publicPath: '/',
		},
		optimization: {
			runtimeChunk: 'single',
			splitChunks: {
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name: 'vendors',
						chunks: 'all',
					},
				},
			},
		},
	};
};
