import { handleActions } from 'utils/redux-actions'

import {
	GET_LISTING_REQUEST,
	GET_LISTING_SUCCESS,
	GET_LISTING_ERROR,
	LISTING_UPDATE_REQUEST,
	LISTING_UPDATE_SUCCESS,
	LISTING_UPDATE_ERROR,
} from './constants'

export const initialState = {
	list: [],
	isLoading: false,
}

export default handleActions(
	{
		[GET_LISTING_REQUEST]: state => {
			state.isLoading = true
		},
		[GET_LISTING_ERROR]: state => {
			state.isLoading = false
		},
		[GET_LISTING_SUCCESS]: (state, { list }) => {
			state.list = list
			state.isLoading = false
		},
		[LISTING_UPDATE_REQUEST]: state => {
			state.isLoading = true
		},
		[LISTING_UPDATE_SUCCESS]: state => {
			state.isLoading = false
		},
		[LISTING_UPDATE_ERROR]: (state, { body }) => {
			state.list = body
			state.isLoading = false
		},
	},
	initialState
)
