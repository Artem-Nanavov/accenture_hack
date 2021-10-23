const path = require('path');

const rootPath = path.resolve(__dirname, '../');

const srcPath = path.resolve(rootPath, './src');
const publicPath = path.resolve(rootPath, './public');

const componentsPath = path.resolve(rootPath, './components');
const corePath = path.resolve(rootPath, './core');
const assetsPath = path.resolve(rootPath, './assets');
const pagesPath = path.resolve(rootPath, './pages');

module.exports = {
	srcPath,
	pagesPath,
	assetsPath,
	rootPath,
	corePath,
	publicPath,
	componentsPath,
};
