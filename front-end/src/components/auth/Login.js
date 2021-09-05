import React, { useContext, useEffect, useState } from 'react'
import AlertContext from '../../context/alert/AlertContext';
import AuthContext from '../../context/auth/authContext'

const Login = props => {
	const authContext = useContext(AuthContext);
	const { loginUser, error, clearError, isAuthenticated } = authContext;

	const alertContext = useContext(AlertContext)
	const { setAlert } = alertContext;

	const [user, setUser] = useState({
		email: '',
		password: '',
	})

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push('/')
		}
		if (error === 'Either email or password incorrect') {
			setAlert(error, "danger")
			clearError();
		}
		//eslint-disable-next-line
	}, [error, isAuthenticated, props.history])

	const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

	const onSubmit = e => {
		e.preventDefault();
		loginUser(user);
	}
	const { email, password } = user;
	return (
		<div className="form-container">
			<h2>Account <span className="text-primary">Login</span></h2>
			<form onSubmit={onSubmit}>

				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input type="email" name="email" value={email} required onChange={onChange} />
				</div>

				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input type="password" name="password" value={password} required minLength={6} onChange={onChange} />
				</div>
				<input type="submit" value="Login" className="btn btn-primary btn-block" />
			</form>
		</div>
	)
}

export default Login