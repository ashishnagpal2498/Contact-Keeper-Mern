const route = require('express').Router();
const auth = require('../middleware/auth');
const Contacts = require('../models/Contact')
const {body, validationResult} = require('express-validator')
// Express Validator

//@route	GET /api/contacts
//@desc
//@access	Private
route.get('/', auth,
async (req,res)=>{
	try {
		const userContacts = await Contacts.find({
			user: req.user.id
		})
		return res.json(userContacts)
		
	} catch (err) {
		console.error(err);
		return res.status(500).json({error:err.message})
	}
})

// @route   POST /api/contacts
// @desc    
// @access  Private
route.post('/', // Multiple Middlewares are added in an array -> []
	// 1. Add Middleware Express Validator + auth ->
	[auth,[body('name','Please enter name').exists(),body('phone').exists()]],
	async (req, res) => {
		const err = validationResult(req);
		if(!err.isEmpty()){
			return res.status(400).json({error:err.array()})
		}
		try{
			
			const {name,email,phone,type} = req.body;
			const contact = new Contacts({
				name,email,phone,type,
				user:req.user.id,
			
			})
			// 2. Call validator for result ->
			// 3. Check for Erro -> from validator
	
			// 4. Create New Contact 
			await contact.save();
			// 5. Save Contact in schema
			return res.json(contact);
			// 6. Return same contact to user; 
		}catch(error){
			console.log(error.message);
			return res.status(500).json({error:error.message});

		}
})
// @route   PUT /api/contacts
// @desc    To update an existing contact
// @access  Private
route.put('/:id',(req,res)=>{
	//update Contact
})


route.delete('/:id',(req,res)=>{
	//Delete Contact
})

module.exports = route;