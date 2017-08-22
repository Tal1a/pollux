const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
	id: Schema.Types.ObjectId,
	board_id: String,
	name: String,
	order: Number
}, {versionKey: false});

module.exports = mongoose.model('List', listSchema);
