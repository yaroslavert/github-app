import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectListingDomain = state => state.listing || initialState

const makeSelectListing = () =>
	createSelector(selectListingDomain, listing => listing.list)

const makeSelectIsLoading = () =>
	createSelector(selectListingDomain, listing => listing.isLoading)

export { makeSelectListing, makeSelectIsLoading }
