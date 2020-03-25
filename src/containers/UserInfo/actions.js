import { createAction } from 'redux-actions'
import {
	GET_USER_REQUEST,
} from './constants'

export const getUser = createAction(GET_USER_REQUEST);
