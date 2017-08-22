const configFile = './config.' + (process.env.NODE_ENV ? process.env.NODE_ENV : 'dev') + '.js';

try {
	module.exports = require(configFile);
} catch (ex) {
	console.error('No config named "' + configFile + '" found in directory "' + __dirname + '"');
	throw ex;
}

