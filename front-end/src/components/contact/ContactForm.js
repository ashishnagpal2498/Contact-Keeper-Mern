import React, { useContext, useState, useEffect } from 'react'
import ContactContext from '../../context/contact/contactContext';
import AlertContext from '../../context/alert/AlertContext'

export const ContactForm = () => {
	// contact Context
	const contactContext = useContext(ContactContext);
	const { addContact, current, updateContact, clearCurrent, error, clearError } = contactContext;

	// Alert Context
	const alertContext = useContext(AlertContext);
	const { setAlert } = alertContext;
	const [contact, setContact] = useState({
		name: '',
		email: "",
		phone: "",
		type: "personal"
	})
	useEffect(() => {
		if (current !== null) {
			setContact(current);
		}
		else {
			setContact({
				name: '',
				email: "",
				phone: "",
				type: "personal"
			});
		}
		if (error === 'ERROR') {
			setAlert(error, "warn", 3000);
			clearError();
		}
		//eslint-disable-next-line
	}, [contactContext, current, error])
	const { name, email, phone, type } = contact;

	const onChange = (e) => {
		setContact({
			...contact,
			[e.target.name]: e.target.value
		})
	}

	const onSubmit = e => {
		e.preventDefault();
		if (current) updateContact(contact);
		else addContact(contact);
		setContact({
			name: '',
			email: "",
			phone: "",
			type: "personal"
		})
	}

	const clear = () => {
		clearCurrent();
	}
	return (
		<form onSubmit={onSubmit}>
			<h2 className="text-primary">{current ? "Edit Contact" : 'Add Contact'}</h2>
			<input
				type="text"
				name="name"
				placeholder="Name"
				value={name}
				onChange={onChange}
			/>
			<input
				type="text"
				placeholder="Email"
				value={email}
				name="email"
				onChange={onChange}
			/>
			<input
				type="text"
				name="phone"
				value={phone}
				placeholder="Phone"
				onChange={onChange}
			/>
			<h5>Contact type</h5>
			<input type="radio" name="type" value="personal" checked={type === 'personal'} onChange={onChange} /> {'Personal  '}
			<input type="radio" name="type" value="professional" checked={type === 'professional'} onChange={onChange} /> {'Professional  '}
			<input type="submit" value={current ? "Update" : 'Add'} className="btn btn-primary btn-block" />
			{current && <button type="click" readOnly value="Clear" onClick={clear} className="btn btn-light btn-block" >Clear</button>
			}
		</form>
	)
}
