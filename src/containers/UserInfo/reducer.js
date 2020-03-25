import { handleActions } from 'utils/redux-actions'
import { UserItemModel } from 'models'

import {
    GET_USER_REQUEST,
	GET_USER_ERROR,
	GET_USER_SUCCESS
} from './constants'

export const initialState = {
    user: new UserItemModel(),
    isLoading: false
}

export default handleActions(
	{
		[GET_USER_REQUEST]: state => {
			state.isLoading = true;
		},
		[GET_USER_ERROR]: state => {
			state.isLoading = false;
		},
		[GET_USER_SUCCESS]: (state, { item }) => {
            state.user =  new UserItemModel(item);
            state.isLoading = false;
		}
	},
	initialState
)
