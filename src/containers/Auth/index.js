import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Route, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from 'components/router/private-route'

import injectSaga from 'utils/injectSaga'
import saga from './saga'
import injectReducer from 'utils/injectReducer'
import reducer from './reducer'
import {
	login,
	register,
	seller,
	resetPassword,
	restorePassword,
	getAllMarketplace,
} from './actions'
import { createStructuredSelector } from 'reselect'
import {
	makeSelectIsAuth,
	makeSelectIsSendedEmail,
	makeSelectSeller,
	makeSelectResetPassword,
	makeSelectRestorePassword,
	makeSelectAllMarketplace,
	makeSelectIsLoading,
} from './selectors'

import Login from './Login'
import Register from './Register'
import ResetPassword from './reset-password'
import RestorePassword from './restore-password'
import LinkAccount from './link-account'
import { AuthCard } from './styled'
import AuthLayout from 'components/layout/auth'

class Auth extends Component {
	render() {
		const {
			isLoading,
			match,
			login,

			register,
			accountCreate,
			location,

			seller,
			sellerConfirmMessage,

			resetPassword,
			passwordResetMessage,

			restorePassword,
			passwordRestoreMessage,

			getAllMarketplace,
			allMarketplace,
		} = this.props
		return (
			<AuthLayout>
				<AuthCard>
					<Helmet>
						<title>Auth</title>
					</Helmet>
					<Switch>
						<Route path={`${match.path}/login`}>
							<Login onSubmit={login} />
						</Route>
						<Route path={`${match.path}/register`}>
							<Register
								onSubmit={register}
								accountCreate={accountCreate}
								location={location}
								isLoading={isLoading}
							/>
						</Route>
						<Route path={`${match.path}/reset-password`}>
							<ResetPassword
								onSubmit={resetPassword}
								passwordResetMessage={passwordResetMessage}
								isLoading={isLoading}
							/>
						</Route>
						<Route path={`${match.path}/restore-password`}>
							<RestorePassword
								onSubmit={restorePassword}
								passwordRestoreMessage={passwordRestoreMessage}
								location={location}
								isLoading={isLoading}
							/>
						</Route>
						<PrivateRoute
							exact
							path={`${match.path}/link-account`}
							component={() => (
								<LinkAccount
									getAllMarketplace={getAllMarketplace}
									allMarketplace={allMarketplace}
									onSubmit={seller}
									isLoading={isLoading}
									sellerConfirmMessage={sellerConfirmMessage}
								/>
							)}
						/>
						<Redirect to={`${match.path}/login`} />
					</Switch>
				</AuthCard>
			</AuthLayout>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	isAuth: makeSelectIsAuth(),
	accountCreate: makeSelectIsSendedEmail(),
	sellerConfirmMessage: makeSelectSeller(),
	passwordResetMessage: makeSelectResetPassword(),
	passwordRestoreMessage: makeSelectRestorePassword(),
	allMarketplace: makeSelectAllMarketplace(),
	isLoading: makeSelectIsLoading(),
})

const withConnect = connect(mapStateToProps, {
	login,
	register,
	seller,
	resetPassword,
	restorePassword,
	getAllMarketplace,
})

export default compose(
	injectReducer({ key: 'auth', reducer }),
	injectSaga({ key: 'auth', saga }),
	withConnect
)(Auth)
