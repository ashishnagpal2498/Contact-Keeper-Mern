import React, { useContext, useState, useEffect } from 'react'
import ContactContext from '../../context/contact/contactContext';
import { UPDATE_CONTACT } from '../../context/types';

export const ContactForm = () => {
	const contactContext = useContext(ContactContext);

	const { addContact, current, updateContact, clearCurrent } = contactContext;
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
	}, [contactContext, current])
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

	const clear = e => {
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
				placeholder="phone"
				value={phone}
				onChange={onChange}
			/>
			<h5>Contact type</h5>
			<input type="radio" name="type" value="personal" checked={type === 'personal'} onChange={onChange} /> {'Personal  '}
			<input type="radio" name="type" value="professional" checked={type === 'professional'} onChange={onChange} /> {'Professional  '}
			<input type="submit" value={current ? "Update" : 'Add'} className="btn btn-primary btn-block" />
			{current && <input type="click" value="Clear" onClick={clear} className="btn btn-light btn-block" />
			}
		</form>
	)
}
