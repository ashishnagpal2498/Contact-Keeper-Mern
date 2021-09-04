import React, { useContext, useState } from 'react'
import AuthContext from '../../context/auth/authContext'

const Login = () => {
	const authContext = useContext(AuthContext);
	const { loginUser } = authContext;
	const [user, setUser] = useState({
		email: '',
		password: '',
	})

	const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

	const onSubmit = e => {
		e.preventDefault();

	}
	const { email, password } = user;
	return (
		<div className="form-container">
			<h2>Account <span className="text-primary">Login</span></h2>
			<form onSubmit={onSubmit}>

				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input type="email" name="email" value={email} onChange={onChange} />
				</div>

				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input type="password" name="password" value={password} onChange={onChange} />
				</div>
				<input type="submit" value="Login" className="btn btn-primary btn-block" />
			</form>
		</div>
	)
}

export default Login