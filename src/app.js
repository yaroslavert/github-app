import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import ReduxToastr from 'react-redux-toastr'
import history from 'utils/history'
import 'style/main.scss'

import App from 'containers/App'

import configureStore from './configureStore'

const initialState = {}
const store = configureStore(initialState, history)

export default () => {
	return (
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<App />
				<ReduxToastr
					timeOut={2000}
					newestOnTop={false}
					preventDuplicates
					position='top-right'
					transitionIn='fadeIn'
					transitionOut='fadeOut'
					progressBar={false}
					closeOnToastrClick
				/>
			</ConnectedRouter>
		</Provider>
	)
}