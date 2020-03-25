import { handleActions } from 'utils/redux-actions'
import { UserListItemModel } from 'models'

import {
    GET_USERS_REQUEST,
    GET_USERS_ERROR,
    GET_USERS_SUCCESS
} from './constants'

export const initialState = {
    list: [],
    isLoading: false
}

export default handleActions(
	{
		[GET_USERS_REQUEST]: state => {
			state.isLoading = true;
		},
		[GET_USERS_ERROR]: state => {
			state.isLoading = false;
		},
		[GET_USERS_SUCCESS]: (state, { list }) => {
            state.list = list.map(item => new UserListItemModel(item));
            state.isLoading = false;
		}
	},
	initialState
)
