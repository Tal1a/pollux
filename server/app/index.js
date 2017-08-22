const config = require('./config/index');
const debug = require('debug')('pollux:pollux-server');

const mongoose = require('mongoose');

const app = require('./app');
const http = require('http');

setupMongoose();
setupApp();

function setupMongoose() {
	mongoose.Promise = global.Promise; // use native promises
	const connection = mongoose.createConnection(config.mongo.uri, {useMongoClient: true});

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