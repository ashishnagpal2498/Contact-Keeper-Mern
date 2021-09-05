// Contact Reducer ->
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

const reducerFunc = (state, action) => {
	switch (action.type) {
		case GET_CONTACTS:
			return {
				...state,
				contacts: action.payload,
				loading: false
			}
		case ADD_CONTACT:
			return {
				...state,
				contacts: [...state.contacts, action.payload],
				loading: false
			}
		case DELETE_CONTACT:
			return {
				...state,
				loading: false,
				contacts: state.contacts.filter(contact => contact._id !== action.payload.id),
				error: "Deleted Successfully"
			}
		case CONTACT_ERROR:
			return {
				...state,
				error: action.payload
			}
		case CLEAR_ERRORS:
			return {
				...state,
				error: null
			}
		case SET_CURRENT:
			return {
				...state,
				current: action.payload,
				loading: false
			}
		case CLEAR_CURRENT:
			return {
				...state,
				current: null
			}
		case UPDATE_CONTACT:
			return {
				...state,
				contacts: state.contacts.map(item => item._id === action.payload._id ? action.payload : item),
				current: null,
				loading: false
			}
		case FILTER_CONTACTS:
			return {
				...state,
				filteredContacts: state.contacts.filter(contact => {
					const regex = new RegExp(action.payload, 'gi')
					return contact.name.match(regex) || contact.email.match(regex);
				})
			}
		case CLEAR_FILTER:
			return {
				...state,
				filteredContacts: null
			}
		case CLEAR_CONTACTS:
			return {
				...state,
				filteredContacts: null,
				current: null,
				contacts: null
			}
		default: return state;
	}
}

export default reducerFunc;