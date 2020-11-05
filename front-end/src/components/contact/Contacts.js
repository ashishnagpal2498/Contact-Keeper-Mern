import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import ContactContext from '../../context/contact/contactContext'
import ContactItem from './ContactItem'

const Contacts = () => {
	const contactContext = useContext(ContactContext);

	const {contacts} = contactContext;
	return (
		<React.Fragment>
			{
				contacts.map(contact =>
					<ContactItem contact={contact}/>)
			}
		</React.Fragment>
	)
}

Contacts.propTypes = {
	
}

export default Contacts
