import { createAction } from 'redux-actions'
import {
	GET_USER_REPOS_REQUEST,
} from './constants'

export const getUserRepos = createAction(GET_USER_REPOS_REQUEST);
