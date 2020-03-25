import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectUserInfoDomain = state => state.userInfo || initialState

const makeSelectUser = () =>
	createSelector(selectUserInfoDomain, profile => profile.user)

const makeSelectIsLoading = () =>
	createSelector(selectUserInfoDomain, profile => profile.isLoading)

export { makeSelectUser, makeSelectIsLoading }
