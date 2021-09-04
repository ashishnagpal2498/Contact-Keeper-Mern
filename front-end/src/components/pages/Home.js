import React from 'react'
import { ContactForm } from '../contact/ContactForm';
import Contacts from '../contact/Contacts'
import FilterContacts from '../contact/FilterContacts';

const Home = () => {
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
