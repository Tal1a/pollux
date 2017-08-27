const router = require('express').Router();

// експортує функцію що приймає один параметр express aplication
module.exports = (app) => {
	app.use("/api/boards", require("./boards/index"));
};   