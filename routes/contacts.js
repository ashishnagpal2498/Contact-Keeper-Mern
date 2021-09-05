const route = require('express').Router();
const auth = require('../middleware/auth');
const Contacts = require('../models/Contact')
const { body, validationResult } = require('express-validator')
// Express Validator

//@route	GET /api/contacts
//@desc
//@access	Private
route.get('/', auth,
	async (req, res) => {
		try {
			const userContacts = await Contacts.find({
				user: req.user.id
			})
			return res.json(userContacts)

		} catch (err) {
			console.error(err);
			return res.status(500).json({ message: err.message })
		}
	})

// @route   POST /api/contacts
// @desc    
// @access  Private
route.post('/', // Multiple Middlewares are added in an array -> []
	// 1. Add Middleware Express Validator + auth ->
	[auth, [body('name', 'Please enter name').exists(), body('phone').exists()]],
	async (req, res) => {
		const err = validationResult(req);
		if (!err.isEmpty()) {
			return res.status(400).json({ error: err.array() })
		}
		const { name, email, phone, type } = req.body;

		try {
			const newContact = new Contacts({
				name, email, phone, type,
				user: req.user.id,
			})
			// 2. Call validator for result ->
			// 3. Check for Erro -> from validator

			// 4. Create New Contact 
			const contact = await newContact.save();
			// 5. Save Contact in schema
			return res.json(contact);
			// 6. Return same contact to user; 
		} catch (error) {
			console.log(error.message);
			return res.status(500).json({ error: error.message });

		}
	})
// @route   PUT /api/contacts
// @desc    To update an existing contact
// @access  Private
route.put('/:id', auth,
	async (req, res) => {
		//update Contact
		console.log('Contact -> PUT call ', req.body)
		try {
			const result = await Contacts.findOneAndUpdate({
				_id: req.params.id
			}, {
				...req.body
			}, {
				new: true
			})
			res.status(201).json(result);
		} catch (err) {
			console.error(err);
			res.status(500).json({ message: err.message })
		}
	})


route.delete('/:id', auth, async (req, res) => {
	//Delete Contact
	try {
		await Contacts.deleteOne({
			_id: req.params.id
		})
		res.status(201).json({ deleted: true });
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: err.message })
	}
})

module.exports = route;