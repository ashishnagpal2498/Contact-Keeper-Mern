// Contact State
import React, { useReducer } from 'react'
import axios from 'axios';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer'

import {
	ADD_CONTACT,
	GET_CONTACTS,
	CLEAR_CONTACTS,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER,
	CONTACT_ERROR,
	CLEAR_ERRORS
} from '../types';

const ContactState = props => {
	const initialState = {
		contacts: [],
		current: null,
		filteredContacts: null,
		error: null,
	}
	const [state, dispatch] = useReducer(ContactReducer, initialState)

	//Get contacts
	const getContacts = async () => {
		try {
			const res = await axios.get('/api/contacts');
			dispatch({ type: GET_CONTACTS, payload: res.data })
		} catch (error) {
			dispatch({ type: CONTACT_ERROR, payload: error.response.message })
		}
	}
	//Add Contact 
	const addContact = async contact => {

		const config = {
			headers: {
				"Content-Type": "application/json"
			}
		}
		try {
			const res = await axios.post('/api/contacts', contact, config);
			dispatch({ type: ADD_CONTACT, payload: res.data })
		} catch (error) {
			dispatch({ type: CONTACT_ERROR, payload: error.response.data.message })
		}
	}

	// Clear Contacts
	const clearContacts = () => dispatch({ type: CLEAR_CONTACTS })

	const clearError = () => dispatch({ type: CLEAR_ERRORS })

	//Update Contact
	const updateContact = async contact => {
		const config = {
			headers: {
				"Content-Type": "application/json"
			}
		}
		try {
			const res = await axios.put(`/api/contacts/${contact._id}`, contact, config)
			dispatch({ type: UPDATE_CONTACT, payload: res.data })
		} catch (error) {
			dispatch({ type: CONTACT_ERROR, payload: error.response.data.message })
		}
	}
	//Delete Contact
	const deleteContact = async id => {
		try {
			const res = await axios.delete(`/api/contacts/${id}`,)
			dispatch({
				type: DELETE_CONTACT, payload: {
					id,
					deleted: res.data
				}
			})
		} catch (error) {
			dispatch({ type: CONTACT_ERROR, payload: error.response.data.message })
		}

	}
	//Set Current Contact
	const setCurrent = contact => dispatch({ type: SET_CURRENT, payload: contact })

	//Clear Current
	const clearCurrent = contact => dispatch({ type: CLEAR_CURRENT })


	//Filter Contacts
	const filterContacts = text => dispatch({ type: FILTER_CONTACTS, payload: text })

	//Clear Filter
	const clearFilter = () => dispatch({ type: CLEAR_FILTER })

	return <ContactContext.Provider
		value={{
			contacts: state.contacts,
			current: state.current,
			filteredContacts: state.filteredContacts,
			error: state.error,
			getContacts,
			addContact,
			deleteContact,
			setCurrent,
			clearCurrent,
			updateContact,
			filterContacts,
			clearFilter,
			clearError,
			clearContacts
		}}>
		{props.children}
	</ContactContext.Provider>
}

export default ContactState;