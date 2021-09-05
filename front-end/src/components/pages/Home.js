import React, { useContext, useEffect } from 'react'
import AuthContext from '../../context/auth/authContext';
import { ContactForm } from '../contact/ContactForm';
import Contacts from '../contact/Contacts'
import FilterContacts from '../contact/FilterContacts';

const Home = () => {
	const authContext = useContext(AuthContext);
	const { loadUser } = authContext

	useEffect(() => {
		loadUser();
		//eslint-disable-next-line
	}, [])
	return (
		<div className="grid-2">
			<div className="">
				<ContactForm />
			</div>
			<div className="">
				<FilterContacts />
				<Contacts />
			</div>
		</div>
	)
}

export default Home;
