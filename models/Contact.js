const mongoose = require('mongoose')

const ContactSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
	},
	phone: {
		type: Number,
		required: true
	},
	type:{
		type: String,
		default: 'personal'
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user'
	}
},{timestamp:true})

module.exports = mongoose.model('contacts',ContactSchema);