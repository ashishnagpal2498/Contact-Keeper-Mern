const route = require('express').Router();

// @route   GET /api/auth
// @desc    Get logged in user
// @access  Private
route.get('/',(req,res)=>{
    res.send('Get logged in user')
});

// @route   POST /api/auth
// @desc    Auth user and get token
// @access  Public
route.post('/',(req,res)=>{
    res.send('Register a user')
});

module.exports = route;