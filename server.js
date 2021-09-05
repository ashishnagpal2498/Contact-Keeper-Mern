const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db')
const path = require('path');

connectDB();

const routes = {
	users: require('./routes/users'),
	auth: require('./routes/auth'),
	contacts: require('./routes/contacts')
}
app.use(express.json())

app.use('/api/users', routes.users);
app.use('/api/auth', routes.auth)
app.use('/api/contacts', routes.contacts)

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('front-end/build'))

	app.use('*', (req, res) => res.sendFile(path.resolve(__dirname, 'front-end', 'build', 'index.html')))
}

app.listen(PORT, () => {
	console.log('Server started at http://localhost:5000')
})