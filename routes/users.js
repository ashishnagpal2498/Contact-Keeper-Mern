const route = require('express').Router();
// Express Validator

// @route   POST /api/users
// @desc    Register a user
// @access  Public
route.post('/',
	// 1. Add express validator Here ->
	(req, res) => {
		// Try catch -> -> Avoid -> Messy code -> handling error ->
		// 2. Call validator for result ->
		// res.send('Register a user')
		// 3. Check for Erro -> from validator

		// 4. Check User -> if exist

		// 5. Create New User from schema

		// 6. Salt rounds -> genSalt -> returns a promise
		// 7. Bcrypt password-> returns a promise

		// 8. Return a JWT 
	})

module.exports = route;