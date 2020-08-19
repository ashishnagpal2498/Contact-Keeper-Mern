const express = require('express')
const app = express();
const PORT = process.env.PORT || 5000;

const routes = {
    users: require('./routes/users')
}

app.use('/api/users',routes.users);

app.listen(PORT,()=>{
    console.log('Server started at http://localhost:5000')
})