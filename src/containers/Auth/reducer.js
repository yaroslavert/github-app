import { handleActions } from 'utils/redux-actions'
import { isAuth } from 'utils/auth'
import { MarketplacesModel } from 'models'
import {
	AUTH_LOGIN_SUCCESS,
	AUTH_LOGIN_REQUEST,
	AUTH_LOGIN_ERROR,
	AUTH_REGISTER_REQUEST,
	AUTH_REGISTER_SUCCESS,
	AUTH_REGISTER_ERROR,
	AUTH_LOGOUT,
	AUTH_SELLER_REQUEST,
	AUTH_SELLER_SUCCESS,
	AUTH_SELLER_ERROR,
	AUTH_RESET_PASSWORD_REQUEST,
	AUTH_RESET_PASSWORD_SUCCESS,
	AUTH_RESET_PASSWORD_ERROR,
	AUTH_RESTORE_PASSWORD_REQUEST,
	AUTH_RESTORE_PASSWORD_SUCCESS,
	AUTH_RESTORE_PASSWORD_ERROR,
	GET_ALL_MARKETPLACE_REQUEST,
	GET_ALL_MARKETPLACE_SUCCESS,
	GET_ALL_MARKETPLACE_ERROR,
} from './constants'

export const initialState = {
	isAuth: isAuth(),
	isLoading: false,
	accountCreate: false,
	sellerConfirmMessage: false,
	passwordResetMessage: false,
	passwordRestoreMessage: false,
	allMarketplace: [],
}

export default handleActions(
	{
		[AUTH_REGISTER_REQUEST]: state => {
			state.isLoading = true
		},
		[AUTH_REGISTER_ERROR]: state => {
			state.isLoading = false
		},
		[AUTH_REGISTER_SUCCESS]: state => {
			state.isLoading = false
			state.accountCreate = true
		},
		[AUTH_LOGIN_REQUEST]: state => {
			state.isLoading = true
		},
		[AUTH_LOGIN_ERROR]: state => {
			state.isLoading = false
		},
		[AUTH_LOGIN_SUCCESS]: state => {
			state.isAuth = true
			state.isLoading = false
		},
		[AUTH_LOGOUT]: state => {
			state.isAuth = false
		},
		[AUTH_SELLER_ERROR]: state => {
			state.isLoading = false
		},
		[AUTH_SELLER_SUCCESS]: state => {
			state.isLoading = false
			state.sellerConfirmMessage = true
		},
		[AUTH_SELLER_REQUEST]: state => {
			state.isLoading = false
		},
		[AUTH_RESET_PASSWORD_REQUEST]: state => {
			state.isLoading = true
		},
		[AUTH_RESET_PASSWORD_SUCCESS]: state => {
			state.isLoading = false
			state.passwordResetMessage = true
		},
		[AUTH_RESET_PASSWORD_ERROR]: state => {
			state.isLoading = false
		},
		[AUTH_RESTORE_PASSWORD_REQUEST]: state => {
			state.isLoading = true
		},
		[AUTH_RESTORE_PASSWORD_SUCCESS]: state => {
			state.isLoading = false
			state.passwordRestoreMessage = true
		},
		[AUTH_RESTORE_PASSWORD_ERROR]: state => {
			state.isLoading = false
		},
		[GET_ALL_MARKETPLACE_REQUEST]: state => {
			state.isLoading = true
		},
		[GET_ALL_MARKETPLACE_SUCCESS]: (state, { list }) => {
			state.isLoading = false
			console.log('list', list)
			// state.allMarketplace = list.map(i => new MarketplacesModel(i))
		},
		[GET_ALL_MARKETPLACE_ERROR]: state => {
			state.isLoading = false
		},
	},
	initialState
)
