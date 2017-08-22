const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
	id: Schema.Types.ObjectId,
	list_id: Schema.Types.ObjectId,
	name: String,
	description: String,
	label_ids: [Schema.Types.ObjectId],
	order: Number,
	member_ids: [Schema.Types.ObjectId]
}, {versionKey: false});

module.exports = mongoose.model('Card', cardSchema);
