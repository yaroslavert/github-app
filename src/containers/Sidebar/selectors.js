import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectSidebarDomain = state => state.sidebar || initialState

const makeSelectToggleSidebar = () =>
	createSelector(selectSidebarDomain, sidebar => sidebar.sidebarState)

export { makeSelectToggleSidebar }
