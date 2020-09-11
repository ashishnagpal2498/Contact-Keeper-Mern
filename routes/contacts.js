const route = require('express').Router();
// Express Validator

//@route	GET /api/contacts
//@desc
//@access	Private
route.get('/', // 1) auth
async (req,res)=>{
	//
})

// @route   POST /api/contacts
// @desc    
// @access  Private
route.post('/', // Multiple Middlewares are added in an array -> []
	// 1. Add Middleware Express Validator + auth ->
	(req, res) => {
		// 2. Call validator for result ->
		// 3. Check for Erro -> from validator

		// 4. Create New Contact 

		// 5. Save Contact in schema

		// 6. Return same contact to user; 
	})

module.exports = route;