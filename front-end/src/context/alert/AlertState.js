// Contact State
import React, { useReducer } from 'react'
import AlertContext from './AlertContext';
import AlertReducer from './AlertReducer'
import { v4 as uuidv4 } from 'uuid';

import { SET_ALERT, CLEAR_ALERT } from '../types';

const AlertState = props => {
	const initialState = [];
	const [state, dispatch] = useReducer(AlertReducer, initialState)

	const setAlert = (msg, type, timeout = 5000) => {
		const id = uuidv4();
		dispatch({
			type: SET_ALERT, payload: {
				msg,
				type,
				id
			}
		})
		setTimeout(() => dispatch({ type: CLEAR_ALERT, payload: id }), timeout)
	}
	return <AlertContext.Provider
		value={{
			alerts: state,
			setAlert
		}}>
		{props.children}
	</AlertContext.Provider>
}

export default AlertState;