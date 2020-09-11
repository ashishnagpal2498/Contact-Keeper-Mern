const route = require('express').Router();

// Check for authentication , jwt , expressvalidator , config (secret) , 

// @route   GET /api/auth
// @desc    Get logged in user
// @access  Private
route.get('/',(req,res)=>{
	res.send('Get logged in user')
	// 
});

// @route   POST /api/auth
// @desc    Auth user and get token
// @access  Public
route.post('/',
	// 1. Express Validator Checks
(req,res)=>{
	// res.send('Register a user')
	// 2. Express- Validator Result ->

	// 3. Check User exist - FindOne using Email

	// 4. Bcrypt -> COmpare Password

	// 5. return JWT using Sign -> ( Same as users)
});

module.exports = route;