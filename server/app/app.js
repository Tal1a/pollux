const express = require('express');
const bodyParser = require('body-parser');

// повертається express application
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// завантажується модуль, що повертає функцію, ця функція одразу ж викликається з аргументом(app)
require('./api/index')(app);

// реєструється функція яка виконується для запитів що починаються з '/' (дефолтний шлях)
app.use((request, response, next) => {
	response.sendStatus(404);
});

module.exports = app;
