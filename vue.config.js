const pkg = require('./package.json')
const webpack = require('webpack')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const isProduction = process.env.NODE_ENV === 'production'
const needReport = false

module.exports = {
	publicPath: isProduction
		? `https://cdn.shenzhepei.com/VF/prod/${pkg.version}/`
		: '/',
	productionSourceMap: false,
	lintOnSave: false,
	devServer: {
		port: 3000,
		hot: true,
		open: true,
		disableHostCheck: true,
	},
	configureWebpack: config => {
		if (isProduction) {
			config.mode = 'production'
			config.plugins.push(
				new CompressionWebpackPlugin({
					algorithm: 'gzip',
					test: /.js|\.html|.json$|.css/,
					threshold: 10240,
					minRatio: 0.8,
				}),
			)
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
								const packageName = module.context.match(
									/[\\/]node_modules[\\/](.*?)([\\/]|$)/,
								)[1]
								// npm package names are URL-safe, but some servers don't like @ symbols
								return `npm.${packageName.replace('@', '')}`
							},
						},
					},
				},
			}
		}
		config.resolve.extensions = ['.js', '.vue', '.json', '.ts', '.tsx']
		config.plugins.push(
			new webpack.DefinePlugin({
				'process.env.VUE_APP_VERSION': JSON.stringify(pkg.version),
			}),
		)
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
		if (isProduction) {
			if (needReport) {
				config
					.plugin('webpack-bundle-analyzer')
					.use(
						require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
					)
					.end()
			}
			config.plugins.delete('prefetch')
		}
	},
}
