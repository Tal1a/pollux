const app = require('./app');
const debug = require('debug')('pollux:pollux-server');
const http = require('http');

const port = process.env.PORT || 8080;
app.set('port', port);

let server = http.createServer(app);
server.listen(port);

if (!debug.enabled) {
	console.log(process.env);
}

server.on('listening', () => {
	debug(`Pollux has been started on ${port}`)
});