import { handleActions } from 'utils/redux-actions'
import { AUTH_LOGOUT } from 'containers/Auth/constants'
import { UserModel } from 'models'

import {
	GET_USER_SUCCESS,
	GET_USER_ERROR,
	GET_USER_REQUEST,
	USER_UPDATE_REQUEST,
	USER_UPDATE_ERROR,
	USER_UPDATE_SUCCESS,
} from './constants'

export const initialState = {
	user: null,
	isLoading: false,
	role: null,
}

export default handleActions(
	{
		[GET_USER_REQUEST]: state => {
			state.isLoading = true
		},
		[GET_USER_ERROR]: state => {
			state.isLoading = false
		},
		[GET_USER_SUCCESS]: (state, { data }) => {
			state.user = new UserModel(data.user)
			state.role = data.user.role
			state.isLoading = false
		},
		[USER_UPDATE_REQUEST]: state => {
			state.isLoading = true
		},
		[USER_UPDATE_ERROR]: state => {
			state.isLoading = false
		},
		[USER_UPDATE_SUCCESS]: (state, { body }) => {
			state.user = Object.assign({}, state.user, new UserModel(body))
			state.isLoading = false
		},
		[AUTH_LOGOUT]: state => {
			state.user = null
		},
	},
	initialState
)
