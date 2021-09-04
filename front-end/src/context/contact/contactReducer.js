// Contact Reducer ->
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

const reducerFunc = (state, action) => {
	switch (action.type) {
		case ADD_CONTACT:
			return {
				...state,
				contacts: [...state.contacts, action.payload]
			}
		case DELETE_CONTACT:
			return {
				...state,
				contacts: state.contacts.filter(contact => contact.id !== action.payload)
			}
		case SET_CURRENT:
			return {
				...state,
				current: action.payload
			}
		case CLEAR_CURRENT:
			return {
				...state,
				current: null
			}
		case UPDATE_CONTACT:
			return {
				...state,
				contacts: state.contacts.map(item => item.id === action.payload.id ? action.payload : item),
				current: null
			}
		default: return state;
	}
}

export default reducerFunc;