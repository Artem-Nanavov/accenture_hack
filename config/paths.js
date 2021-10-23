const path = require('path');

const rootPath = path.resolve(__dirname, '../');

const srcPath = path.resolve(rootPath, './src');
const publicPath = path.resolve(rootPath, './public');

const componentsPath = path.resolve(rootPath, './components');
const corePath = path.resolve(rootPath, './core');
const assetsPath = path.resolve(rootPath, './assets');

module.exports = {
	srcPath,
	assetsPath,
	rootPath,
	corePath,
	publicPath,
	componentsPath,
};
