const route = require('express').Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const jwtSecret = require('config').get('jwtSecret');
const auth = require('../middleware/auth')
// Check for authentication , jwt , expressvalidator , config (secret) , 

// @route   GET /api/auth
// @desc    Get logged in user
// @access  Private
route.get('/', auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select('-password');
		res.json(user)
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ error: error.message })
	}
	// 
});

// @route   POST /api/auth
// @desc    Auth user and get token
// @access  Public
route.post('/',
	// 1. Express Validator Checks
	[body('email').isEmail(), body('password').exists()],
	async (req, res) => {
		// res.send('Register a user')
		// 2. Express- Validator Result ->
		const err = validationResult(req);
		if (!err.isEmpty()) {
			return res.status(400).json({ error: err.array() });
		}
		const { email, password } = req.body;
		try {
			const user = await User.findOne({ email });

			if (!user) {
				return res.status(400).json({ error: 'Either email or password incorrect' })
			}

			const isEqual = await bcrypt.compare(password, user.password)
			if (!isEqual) {
				return res.status(400).json({ error: 'Either email or password incorrect' })
			}

			const payload = {
				user: {
					id: user.id
				}
			}
			jwt.sign(payload, jwtSecret, {
				expiresIn: '1hr'
			}, (error, token) => {
				if (error) throw error;
				res.json({ token });
			})
			// 3. Check User exist - FindOne using Email

			// 4. Bcrypt -> COmpare Password

			// 5. return JWT using Sign -> ( Same as users)
		} catch (error) {
			console.error(error.message);
			res.status(500).json({ error: error.message });
		}
	});

module.exports = route;