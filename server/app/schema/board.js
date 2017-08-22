const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boardSchema = new Schema({
	id: Schema.Types.ObjectId,
	title: String,
	visibility: String,
	member_ids: [Schema.Types.ObjectId],
	background: {
		color: String,
		image: String
	}
}, {versionKey: false});

module.exports = mongoose.model('Board', boardSchema);
