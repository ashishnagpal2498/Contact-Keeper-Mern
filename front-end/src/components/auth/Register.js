import React, { useContext, useState, useEffect } from 'react'
import AlertContext from '../../context/alert/AlertContext';
import AuthContext from '../../context/auth/authContext'

const Register = props => {

	const authContext = useContext(AuthContext);
	const { registerUser, error, clearError, isAuthenticated } = authContext;

	// AlertContext -
	const alertContext = useContext(AlertContext);
	const { setAlert } = alertContext;

	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		password2: ''
	})

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push('/')
		}
		if (error === 'User Already Exists') {
			setAlert(error, "danger")
		}
		clearError();
		//eslint-disable-next-line
	}, [error, isAuthenticated, props.history])
	const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

	const onSubmit = e => {
		e.preventDefault();
		if (name === '' || email === '' || password === '') {
			setAlert("Please enter all the fields", "danger", 3000)
		}
		else if (password !== password2) {
			setAlert("Password Mismatch", "danger", 3000)
		}
		else {
			registerUser({
				name,
				email,
				password
			})
		}
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