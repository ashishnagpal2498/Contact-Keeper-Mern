import React, { useContext, useEffect } from 'react'
import ContactContext from '../../context/contact/contactContext'
import ContactItem from './ContactItem'

const Contacts = () => {

	const contactContext = useContext(ContactContext);
	const { contacts, filteredContacts, getContacts, loading } = contactContext;

	useEffect(() => {
		getContacts()
		//eslint-disable-next-line
	}, [])
	if (contacts !== null && contacts.length === 0 && !loading) {
		return (
			<h4>Please add some contacts</h4>
		)
	}
	return (

		<React.Fragment>
			{contacts !== null && !loading ?
				<React.Fragment>{
					filteredContacts !== null ? filteredContacts.map(contact =>
						<ContactItem key={contact._id} contact={contact} />) :
						contacts.map(contact =>
							<ContactItem key={contact._id} contact={contact} />)
				}
				</React.Fragment> :
				<h4>Loading . . .</h4>
			}
		</React.Fragment>
	)
}

export default Contacts
