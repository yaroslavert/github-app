import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectUserListDomain = state => state.userList || initialState

const makeSelectList = () =>
	createSelector(selectUserListDomain, profile => profile.list)

const makeSelectIsLoading = () =>
	createSelector(selectUserListDomain, profile => profile.isLoading)

export { makeSelectList, makeSelectIsLoading }
