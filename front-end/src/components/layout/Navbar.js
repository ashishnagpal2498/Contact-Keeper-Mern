import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';

const Navbar = props => {
	const { title, icon } = props;

	const authContext = useContext(AuthContext);
	const { isAuthenticated, user, logout } = authContext

	const contactContext = useContext(ContactContext)
	const { clearContacts } = contactContext
	const onLogout = () => {
		logout();
		clearContacts();
		// props.history.push('/login')
	}
	const authLinks = (
		<Fragment>
			<li>Hello {user && user.name}</li>
			<li> <a onClick={onLogout} href="#!">
				<i className="fas fa-sign-out-alt"></i>
				<span className="hide-sm">Logout
				</span>
			</a>
			</li>
		</Fragment>
	)

	const guestLinks = (
		<Fragment>
			<li>
				<Link to="/register">Register</Link>
			</li>
			<li>
				<Link to="/login">Login</Link>
			</li>
		</Fragment>
	)
	return (
		<div className="navbar bg-primary">
			<h2>
				<i className={icon} /> {title}
			</h2>
			<ul>
				{isAuthenticated ? authLinks : guestLinks}

			</ul>
		</div>
	)
}

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired
}

Navbar.defaultProps = {
	title: 'Contact-Keeper',
	icon: 'fas fa-id-card-alt'
}

export default Navbar;
