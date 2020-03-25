import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as toastrReducer } from 'react-redux-toastr'

import history from 'utils/history'

export default function createReducer(injectedReducers = {}) {
	const rootReducer = combineReducers({
		router: connectRouter(history),
		toastr: toastrReducer,
		...injectedReducers,
	})
	return rootReducer
}
