const debug = require('debug')('pollux');
const config = require('./config/index');

const mongoose = require('mongoose');

const app = require('./app');
const http = require('http');

setupMongoose();
setupApp();

function setupMongoose() {
	mongoose.Promise = require('bluebird'); // use bluebird promises
	const connection = mongoose.connect(config.mongo.uri, {useMongoClient: true}); // opens default connection

	connection.on('connected', () => {
		debug(`Pollux has been connected to Mongo by '${config.mongo.uri}'`)
	});
}

function setupApp() {
	const port = process.env.PORT || 8080;
	app.set('port', port);

	let server = http.createServer(app);
	server.listen(port);

	server.on('listening', () => {
		debug(`Pollux has been started on ${port}`)
	});
}