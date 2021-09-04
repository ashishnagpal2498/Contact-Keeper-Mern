// Contact State
import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer'

import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	SET_ALERT,
	CLEAR_ALERT
} from '../types';

const ContactState = props => {
	const initialState = {
		contacts: [
			{
				"type": "personal",
				"id": "5f95cf899b982650dc9e8f4c",
				"name": "Abc",
				"email": "abc@gmail.com",
				"phone": 9876382744,
				"user": "5f905f7d514f900194d1f729",
			},
			{
				"type": "professional",
				"id": "5fa407fdb8010a2e10fc4316",
				"name": "Chetanya",
				"email": "xyz@gmail.com",
				"phone": 9212567763,
				"user": "5f905f7d514f900194d1f729",
			}
		],
		current: null
	}
	const [state, dispatch] = useReducer(ContactReducer, initialState)

	//Add Contact 
	const addContact = contact => {
		contact.id = uuidv4();
		dispatch({ type: ADD_CONTACT, payload: contact })
	}

	//Delete Contact
	const deleteContact = id => dispatch({ type: DELETE_CONTACT, payload: id })

	//Set Current Contact
	const setCurrent = contact => dispatch({ type: SET_CURRENT, payload: contact })

	//Clear Current
	const clearCurrent = contact => dispatch({ type: CLEAR_CURRENT })

	//Update Contact
	const updateContact = contact => dispatch({type:UPDATE_CONTACT,payload:contact})


	return <ContactContext.Provider
		value={{
			contacts: state.contacts,
			current: state.current,
			addContact,
			deleteContact,
			setCurrent,
			clearCurrent,
			updateContact
		}}>
		{props.children}
	</ContactContext.Provider>
}

export default ContactState;