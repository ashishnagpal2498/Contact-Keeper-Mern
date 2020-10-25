const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db')

connectDB();

const routes = {
	users: require('./routes/users'),
	auth: require('./routes/auth'),
	contacts: require('./routes/contacts')
}
app.use(express.json())

app.use('/api/users',routes.users);
app.use('/api/auth',routes.auth)
app.use('/api/contacts',routes.contacts)

app.listen(PORT,()=>{
    console.log('Server started at http://localhost:5000')
})