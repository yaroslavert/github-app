import { handleActions } from 'utils/redux-actions'
import { UPDATE_SIDEBAR_MENU } from './constants'

export const initialState = {
	sidebarState: localStorage.getItem('sidebar') || 'full',
}

export default handleActions(
	{
		[UPDATE_SIDEBAR_MENU]: (state, { payload }) => {
			localStorage.setItem('sidebar', payload)
			state.sidebarState = payload
		},
	},
	initialState
)
