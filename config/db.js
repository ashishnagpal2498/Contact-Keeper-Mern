const mongoose = require('mongoose');
const config = require('config')
const db = config.get('mongoURI');

const connectDb = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false
		})
		console.log('MongoDB connected');
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
}
module.exports = connectDb;