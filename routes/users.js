const route = require('express').Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const jwtSecret = require('config').get('jwtSecret');
// Express Validator

// @route   POST /api/users
// @desc    Register a user
// @access  Public
route.post('/', [
	body('email', 'Please include a valid Email').isEmail(),
	body('name', 'Please enter a Name').not().isEmpty(),
	body('password', 'Please enter password of length 6 or more').trim().not().isEmpty()
],
	// 1. Add express validator Here ->
	async (req, res) => {
		const err = validationResult(req);
		if (!err.isEmpty()) {
			return res.status(400).send({ message: err.array() })
		}
		const { email, name, password } = req.body;
		try {
			let user = await User.findOne({ email });
			if (user) {
				return res.status(400).send({ message: "User Already Exists" })
			}

			user = new User({
				email,
				password,
				name
			})
			const salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(password, salt);
			const payload = {
				user: {
					id: user.id
				}
			}
			await user.save();
			jwt.sign(payload, jwtSecret, {
				expiresIn: "1hr"
			}, (error, token) => {
				if (error) throw error;
				res.json({ token })
			})

		} catch (error) {
			console.error(error.message);
			res.status(500).send({ message: error.message })
		}
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