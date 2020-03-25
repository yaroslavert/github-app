import { handleActions } from 'utils/redux-actions'
import { UserItemRepoModel } from 'models'

import {
	GET_USER_REPOS_REQUEST,
	GET_USER_REPOS_ERROR,
	GET_USER_REPOS_SUCCESS
} from './constants'

export const initialState = {
    list: [],
    isLoading: false
}

export default handleActions(
	{
		[GET_USER_REPOS_REQUEST]: state => {
			state.isLoading = true;
		},
		[GET_USER_REPOS_ERROR]: state => {
			state.isLoading = false;
		},
		[GET_USER_REPOS_SUCCESS]: (state, { list }) => {
            state.list =  list.map(item => new UserItemRepoModel(item));
            state.isLoading = false;
		}
	},
	initialState
)
