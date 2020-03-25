import { takeLatest, put, call } from 'redux-saga/effects'
import Api from 'utils/api'
import { toastr } from 'react-redux-toastr'
import { push } from 'connected-react-router'

import {
	GET_LISTING_REQUEST,
	GET_LISTING_SUCCESS,
	GET_LISTING_ERROR,
	LISTING_UPDATE_REQUEST,
	LISTING_UPDATE_SUCCESS,
	LISTING_UPDATE_ERROR,
} from './constants'

function* getListing({ payload }) {
	try {
		const { list } = yield call(Api.get, '/api/inventory/list')
		yield put({ type: GET_LISTING_SUCCESS, list })
	} catch (e) {
		yield put({ type: GET_LISTING_ERROR })
		toastr.error('ERROR', 'Get listing could not be completed')
	}
}

function* updateListing({ payload }) {
	try {
		yield call(Api.post, '/api/staff/change_user_password', payload)
		yield put({ type: LISTING_UPDATE_SUCCESS })
		yield put(push('/account/profile'))
		toastr.success('SUCCESS', 'Listing update success')
	} catch (e) {
		yield put({ type: LISTING_UPDATE_ERROR })
		toastr.error('Error', 'Listing update failed')
	}
}

export default function* listingSaga() {
	yield takeLatest(GET_LISTING_REQUEST, getListing)
	yield takeLatest(LISTING_UPDATE_REQUEST, updateListing)
}
