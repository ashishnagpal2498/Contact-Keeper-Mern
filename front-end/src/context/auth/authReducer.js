import { AUTH_ERROR, CLEAR_ERRORS, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_SUCCESS, USER_LOADED } from "../types";

const AuthReducer = (state, action) => {
	switch (action.type) {
		case USER_LOADED:
			return {
				...state,
				user: action.payload,
				isAuthenticated: true,
				loading: false
			}
		case REGISTER_SUCCESS:
		case LOGIN_SUCCESS:
			localStorage.setItem('token', action.payload.token)
			return {
				...state,
				...action.payload,
				isAuthenticated: true,
				loading: false
			}
		case REGISTER_FAILURE:
		case AUTH_ERROR:
		case LOGIN_FAILURE:
		case LOGOUT:
			localStorage.removeItem('token')
			return {
				...state,
				token: null,
				user: null,
				isAuthenticated: false,
				loading: false,
				error: action.payload
			}
		case CLEAR_ERRORS:
			return {
				...state,
				error: null
			}
		default: return state;
	}
}

export default AuthReducer;