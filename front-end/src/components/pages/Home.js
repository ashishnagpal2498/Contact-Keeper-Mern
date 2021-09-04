import React from 'react'
import { ContactForm } from '../contact/ContactForm';
import Contacts from '../contact/Contacts'

const Home = () => {
	return (
		<div className="grid-2">
			<div className="">
				<ContactForm />
			</div>
			<div className="">
				<Contacts />
			</div>
		</div>
	)
}

export default Home;
