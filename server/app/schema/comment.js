const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
	id: Schema.Types.ObjectId,
	card_id: Schema.Types.ObjectId,
	text: String,
	created_at: String,
	user_id: Schema.Types.ObjectId
}, {versionKey: false});

module.exports = mongoose.model('Comment', commentSchema);
