import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAuth } from 'utils/auth'

export default React.memo(({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props => {
				if (isAuth()) {
					return <Component {...props} />
				}

				return (
					<Redirect
						to={{
							pathname: `/auth/login`,
							state: { from: props.location },
						}}
					/>
				)
			}}
		/>
	)
})
