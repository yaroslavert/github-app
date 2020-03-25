import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectProfileDomain = state => state.profile || initialState

const makeSelectUser = () =>
	createSelector(selectProfileDomain, profile => profile.user)

const makeSelectIsLoading = () =>
	createSelector(selectProfileDomain, profile => profile.isLoading)

export { makeSelectUser, makeSelectIsLoading }
