// експортує функцію що приймає один параметр express application
module.exports = (app) => {
	app.use("/api/boards", require("./boards/index"));
};   