const pkg = require('./package.json')
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
	publicPath: isProduction ? `https://cdn.shenzhepei.com/VF/prod/${pkg.version}/` : `/`,
	productionSourceMap: false,
	devServer: {
		port: 3000,
		hot: true,
		open: true,
		disableHostCheck: true
	},
	configureWebpack: config => {
		if (isProduction) {
			config.mode = 'production'
			config.plugins.push(new CompressionWebpackPlugin({
				algorithm: 'gzip',
				test: /.js|\.html|.json$|.css/,
				threshold: 10240,
				minRatio: 0.8
			}))
			config.optimization = {
				runtimeChunk: 'single',
				splitChunks: {
					chunks: 'all',
					maxInitialRequests: Infinity,
					minSize: 20000,
					cacheGroups: {
						vendor: {
							test: /[\\/]node_modules[\\/]/,
							name(module) {
								// get the name. E.g. node_modules/packageName/not/this/part.js
								// or node_modules/packageName
								const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
								// npm package names are URL-safe, but some servers don't like @ symbols
								return `npm.${packageName.replace('@', '')}`
							}
						}
					}
				}
			}
		}
	},
	chainWebpack: config => {
		config.module
			.rule('md')
			.test(/\.md$/)
			.use('html-loader')
			.loader('html-loader')
			.end()
			.use('markdown-loader')
			.loader('markdown-loader')
			.end()
	},
}
