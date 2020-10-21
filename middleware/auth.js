// JWT and Config
const jwt = require('jsonwebtoken');
const jwtSecret = require('config').get('jwtSecret');

module.exports = (req, res, next) => {
	// Try Catch ->
	const token = req.header('x-auth-token');
	if(!token){
		return res.status(401).send({error: 'Unauthorized access'})
	}
	try{
	const decoded = jwt.verify(token,jwtSecret)
	req.user = decoded.user;
	next();
	}catch(err){
		res.status(401).json({error:'Invalid Token'})
	}
	// 1. Grab token from header ->
	// 2. Check if Token valid
	// 3. decoded -> token.verify()
	// 4. Return User-> payload ->


}