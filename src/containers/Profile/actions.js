import { createAction } from 'redux-actions'
import {
	GET_USER_REQUEST,
	USER_UPDATE_REQUEST,
	USER_CHANGE_PASSWORD_REQUEST,
} from './constants'

export const getUser = createAction(GET_USER_REQUEST)
export const userUpdate = createAction(USER_UPDATE_REQUEST)
export const changePassword = createAction(USER_CHANGE_PASSWORD_REQUEST)
