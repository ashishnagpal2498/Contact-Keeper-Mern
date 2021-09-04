import React, { useContext } from 'react'
import ContactContext from '../../context/contact/contactContext'
import ContactItem from './ContactItem'

const Contacts = () => {
	const contactContext = useContext(ContactContext);
	const { contacts, filteredContacts } = contactContext;
	return (
		<React.Fragment>
			{
				filteredContacts !== null ? filteredContacts.map(contact =>
					<ContactItem key={contact.id} contact={contact} />) :
					contacts.map(contact =>
						<ContactItem key={contact.id} contact={contact} />)
			}
		</React.Fragment>
	)
}

export default Contacts
