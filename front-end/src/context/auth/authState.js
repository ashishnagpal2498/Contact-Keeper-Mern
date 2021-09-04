// Contact State
import React, { useReducer } from 'react'
import AuthContext from './authContext';
import AuthReducer from './authReducer'

import { USER_LOADED } from '../types';

const AuthState = props => {
	const initialState = {
		token: localStorage.getItem('token'),
		isAuthenticated: false,
		user: null,
		loading: true,
		error: null
	}
	const [state, dispatch] = useReducer(AuthReducer, initialState)

	// Load User

	// Register User
	const registerUser = user => dispatch({ type: USER_LOADED, payload: user })
	//Login User
	const loginUser = user => dispatch({ type: "fdf", payload: user })
	//Logout

	//Clear Errors

	return <AuthContext.Provider
		value={{
			token: state.token,
			isAuthenticated: state.isAuthenticated,
			user: state.user,
			loading: state.loading,
			error: state.error,
			registerUser,
			loginUser
		}}>
		{props.children}
	</AuthContext.Provider>
}

export default AuthState;