const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// routs
require('./api/index')(app);

app.use((request, response, next) => {
	response.sendStatus(404);
});

module.exports = app;
