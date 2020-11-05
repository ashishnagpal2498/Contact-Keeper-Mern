// Contact State
import React ,{useReducer} from 'react'
import uuid from 'uuid';
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
				"_id": "5f95cf899b982650dc9e8f4c",
				"name": "Abc",
				"email": "abc@gmail.com",
				"phone": 9876382744,
				"user": "5f905f7d514f900194d1f729",
			},
			{
				"type": "professional",
				"_id": "5fa407fdb8010a2e10fc4316",
				"name": "Chetanya",
				"email": "xyz@gmail.com",
				"phone": 9212567763,
				"user": "5f905f7d514f900194d1f729",
			}
		]
	}
	const [state,dispatch] = useReducer(ContactReducer,initialState)

	return <ContactContext.Provider
	 value={{
		 contacts: state.contacts
	 }}>
		{props.children}
	</ContactContext.Provider>
}

export default ContactState;