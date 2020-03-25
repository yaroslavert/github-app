import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectAuthDomain = state => state.auth || initialState

export const makeSelectIsAuth = () =>
	createSelector(selectAuthDomain, substate => substate.isAuth)

export const makeSelectIsSendedEmail = () =>
	createSelector(selectAuthDomain, substate => substate.accountCreate)

export const makeSelectSeller = () =>
	createSelector(selectAuthDomain, substate => substate.sellerConfirmMessage)

export const makeSelectResetPassword = () =>
	createSelector(selectAuthDomain, substate => substate.passwordResetMessage)

export const makeSelectRestorePassword = () =>
	createSelector(selectAuthDomain, substate => substate.passwordRestoreMessage)

export const makeSelectAllMarketplace = () =>
	createSelector(selectAuthDomain, substate => substate.allMarketplace)

export const makeSelectIsLoading = () =>
	createSelector(selectAuthDomain, substate => substate.isLoading)
