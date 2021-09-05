// Contact State
import React, { useReducer } from 'react'
import axios from 'axios'
import AuthContext from './authContext';
import AuthReducer from './authReducer'

import { AUTH_ERROR, CLEAR_ERRORS, LOGIN_FAILURE, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_SUCCESS, USER_LOADED } from '../types';
import setAuthToken from '../../utils/setAuthToken';

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

	const loadUser = async () => {
		// Add token to global header for requests
		if (localStorage.token) {
			setAuthToken(localStorage.token);
		}
		try {
			const res = await axios.get('/api/auth');
			dispatch({ type: USER_LOADED, payload: res.data });
		} catch (error) {
			dispatch({ type: AUTH_ERROR })
		}
	}

	// Register User
	const registerUser = async user => {

		const config = {
			headers: {
				"Content-Type": "application/json"
			}
		}
		try {
			const res = await axios.post('/api/users', user, config)
			dispatch({ type: REGISTER_SUCCESS, payload: res.data })
			loadUser();

		} catch (err) {
			console.error(err.response.data);
			dispatch({ type: REGISTER_FAILURE, payload: err.response.data.message })
		}

	}
	//Login User
	const loginUser = async user => {

		const config = {
			headers: {
				"Content-Type": "application/json"
			}
		}
		try {
			const res = await axios.post('/api/auth', user, config)
			dispatch({ type: LOGIN_SUCCESS, payload: res.data })
			loadUser();

		} catch (err) {
			console.error(err.response.data);
			dispatch({ type: LOGIN_FAILURE, payload: err.response.data.message })
		}

	}
	//Logout

	//Clear Errors
	const clearError = () => dispatch({ type: CLEAR_ERRORS })
	return <AuthContext.Provider
		value={{
			token: state.token,
			isAuthenticated: state.isAuthenticated,
			user: state.user,
			loading: state.loading,
			error: state.error,
			loadUser,
			registerUser,
			loginUser,
			clearError
		}}>
		{props.children}
	</AuthContext.Provider>
}

export default AuthState;