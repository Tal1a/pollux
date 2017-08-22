const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const labelSchema = new Schema({
	id: Schema.Types.ObjectId,
	board_id: Schema.Types.ObjectId,
	name: String,
	color: String
}, {versionKey: false});

module.exports = mongoose.model('Label', labelSchema);
