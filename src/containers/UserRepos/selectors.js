import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectUserReposDomain = state => state.userRepos || initialState

const makeSelectList = () =>
	createSelector(selectUserReposDomain, profile => profile.list)

const makeSelectIsLoading = () =>
	createSelector(selectUserReposDomain, profile => profile.isLoading)

export { makeSelectList, makeSelectIsLoading }
