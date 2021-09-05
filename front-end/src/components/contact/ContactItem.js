import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import ContactContext from '../../context/contact/contactContext'
import AlertContext from '../../context/alert/AlertContext'

const ContactItem = ({ contact }) => {
	const contactContext = useContext(ContactContext);

	const { deleteContact, setCurrent, clearCurrent, error, clearError } = contactContext;

	const { name, _id, email, phone, type } = contact;

	const alertContext = useContext(AlertContext);
	const { setAlert } = alertContext;

	useEffect(() => {
		if (error === 'Deleted Successfully') {
			setAlert(error, "success", 3000)
			clearError();
		}
		//eslint-disable-next-line
	}, [error])
	const DeleteContact = () => {
		deleteContact(_id);
		clearCurrent();
	}
	return (
		<div className="card bg-light">
			<h3 className="text-primary text-left">
				{name} {' '}
				<span style={{ float: 'right' }} className={'badge ' + (type === 'professional' ? 'badge-success' : 'badge-primary')}>
					{type.charAt(0).toUpperCase() + type.slice(1)}</span>
			</h3>
			<ul className="list">
				{
					email && <li><i className="fas fa-envelope-open" />  {email}</li>
				}
				{
					phone && <li><i className="fas fa-phone" /> {phone}</li>
				}
			</ul>
			<p>
				<button className="btn btn-dark btn-md" onClick={() => setCurrent(contact)}><i className="fas fa-pencil-alt" /></button>
				<button className="btn btn-danger btn-md" onClick={DeleteContact}><i className="fas fa-trash-alt" /></button>
			</p>
		</div>
	)
}

ContactItem.propTypes = {
	contact: PropTypes.object.isRequired
}

export default ContactItem;