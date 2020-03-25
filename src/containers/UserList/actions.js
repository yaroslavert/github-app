import { createAction } from 'redux-actions'
import {
	GET_USERS_REQUEST,
} from './constants'

export const getUsers = createAction(GET_USERS_REQUEST);
