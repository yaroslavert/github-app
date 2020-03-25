import { createAction } from 'redux-actions'
import {
	AUTH_LOGIN_REQUEST,
	AUTH_REGISTER_REQUEST,
	AUTH_LOGOUT,
	AUTH_SELLER_REQUEST,
	AUTH_RESET_PASSWORD_REQUEST,
	AUTH_RESTORE_PASSWORD_REQUEST,
	GET_ALL_MARKETPLACE_REQUEST,
} from './constants'

export const login = createAction(AUTH_LOGIN_REQUEST)
export const register = createAction(AUTH_REGISTER_REQUEST)
export const logout = createAction(AUTH_LOGOUT)
export const seller = createAction(AUTH_SELLER_REQUEST)
export const resetPassword = createAction(AUTH_RESET_PASSWORD_REQUEST)
export const restorePassword = createAction(AUTH_RESTORE_PASSWORD_REQUEST)
export const getAllMarketplace = createAction(GET_ALL_MARKETPLACE_REQUEST)
