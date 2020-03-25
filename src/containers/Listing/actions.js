import { createAction } from 'redux-actions'
import { GET_LISTING_REQUEST, LISTING_UPDATE_REQUEST } from './constants'

export const getListing = createAction(GET_LISTING_REQUEST)
export const updateListing = createAction(LISTING_UPDATE_REQUEST)
