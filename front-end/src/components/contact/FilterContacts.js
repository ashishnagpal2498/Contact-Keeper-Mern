import React, { Fragment, useContext, useEffect, useRef } from 'react'
import ContactContext from '../../context/contact/contactContext'

const FilterContacts = () => {
	const contactContext = useContext(ContactContext);

	const { filterContacts, clearFilter, filteredContacts } = contactContext
	const text = useRef('');

	useEffect(() => {
		if (filteredContacts === null)
			text.current.value = ''
	})
	const onChange = (e) => {
		if (text.current.value !== '') {
			filterContacts(e.target.value);
		}
		else
			clearFilter();
		// Check if its async or sync
	}

	return (
		<Fragment>
			<input type="text" placeholder="Filter Contacts ..." name="filter" ref={text} onChange={onChange} />
		</Fragment>
	)
}

export default FilterContacts;