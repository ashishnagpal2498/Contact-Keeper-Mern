import React, { useContext, useState } from 'react'
import AuthContext from '../../context/auth/authContext'

const Register = () => {
	const authContext = useContext(AuthContext);
	const {registerUser} = authContext;
	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		password2: ''
	})

	const onChange = e => setUser({...user,[e.target.name]:e.target.value})

	const onSubmit = e => {
		e.preventDefault();
		
	}	
	const { name, email, password, password2 } = user;
	return (
		<div className="form-container">
			<h2>Account <span className="text-primary">Register</span></h2>
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input type="text" name="name" value={name} onChange={onChange} />
				</div>

				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input type="email" name="email" value={email} onChange={onChange} />
				</div>

				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input type="password" name="password" value={password} onChange={onChange} />
				</div>

				<div className="form-group">
					<label htmlFor="password2">Confirm Password</label>
					<input type="password" name="password2" value={password2} onChange={onChange} />
				</div>
				<input type="submit" value="Register" className="btn btn-primary btn-block" />
			</form>
		</div>
	)
}

export default Register