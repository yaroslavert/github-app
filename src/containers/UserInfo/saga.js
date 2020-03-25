import { takeLatest, put, call } from 'redux-saga/effects'
import Api from 'utils/api'
import { toastr } from 'react-redux-toastr'

import {
	GET_USER_REQUEST,
	GET_USER_ERROR,
	GET_USER_SUCCESS
} from './constants'

function* getUser({ payload }) {
	try {
		const item = yield call(Api.get, `/users/${payload}`)
        yield put({ type: GET_USER_SUCCESS, item })
	} catch (e) {
		yield put({ type: GET_USER_ERROR })
		toastr.error('ERROR', 'Failed get user profile')
	}
}

export default function* profileSaga() {
	yield takeLatest(GET_USER_REQUEST, getUser);
}