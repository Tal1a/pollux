// https://nodejs.org/api/process.html#process_process_env
// process - глобальна змінна що має властивість env; NODE_ENV - назва властивості (символізує тип середовища в якому
// працює наша програма (development, stage, production)
const configFile = './config.' + (process.env.NODE_ENV ? process.env.NODE_ENV : 'dev') + '.js';

try {
	// завантажується конфіг файл для поточного середовища і експортується цим (index.js) модулем
	module.exports = require(configFile); 
} catch (ex) {
	console.error('No config named "' + configFile + '" found in directory "' + __dirname + '"');
	throw ex;
}

