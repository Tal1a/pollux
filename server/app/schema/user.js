const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	User: {
		id: Schema.Types.ObjectId
	}
}, {versionKey: false});

module.exports = mongoose.model('User', userSchema);
