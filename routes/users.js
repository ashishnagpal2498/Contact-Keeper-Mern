const route = require('express').Router();

// @route   POST /api/users
// @desc    Register a user
// @access  Public
route.post('/',(req,res)=>{
    res.send('Register a user')
})

module.exports = route;