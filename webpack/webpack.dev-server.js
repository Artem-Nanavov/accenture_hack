const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const webpackConfig = require('./webpack.development.config');
const { port, host } = require('../config/dev');

const server_url = 'http://192.168.43.16:8888/';

const options = {
	contentBase: false,
	hot: true,
	host,
	quiet: false,
	disableHostCheck: true,
	publicPath: '/',
	historyApiFallback: {
		rewrites: [{ from: '/', to: '/' }],
	},
	watchOptions: {
		ignored: /node_modules/,
	},
	proxy: {
		'/entity': {
			target: `${server_url}entity/`,
			pathRewrite: { '^/entity': '' },
			changeOrigin: true,
			secure: false,
		},
		'/clients-graph': {
			target: `${server_url}clients-graph/`,
			pathRewrite: { '^/clients-graph': '' },
			changeOrigin: true,
			secure: false,
		},
		'/products-graph': {
			target: `${server_url}products-graph/`,
			pathRewrite: { '^/products-graph': '' },
			changeOrigin: true,
			secure: false,
		},
		'/login': {
			target: `${server_url}login/`,
			pathRewrite: { '^/login': '' },
			changeOrigin: true,
			secure: false,
		},
		'/plan': {
			target: `${server_url}plan/`,
			pathRewrite: { '^/plan': '' },
			changeOrigin: true,
			secure: false,
		},
		'/clients': {
			target: `${server_url}clients/`,
			pathRewrite: { '^/clients': '' },
			changeOrigin: true,
			secure: false,
		},
		'/upload': {
			target: `${server_url}upload/`,
			pathRewrite: { '^/upload': '' },
			changeOrigin: true,
			secure: false,
		},
	},
};

WebpackDevServer.addDevServerEntrypoints(webpackConfig, options);

const compiler = webpack(webpackConfig);
const server = new WebpackDevServer(compiler, options);

server.listen(port, host);
