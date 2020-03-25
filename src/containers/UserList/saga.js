import { takeLatest, put, call } from 'redux-saga/effects'
import Api from 'utils/api'
import { toastr } from 'react-redux-toastr'

import {
    GET_USERS_REQUEST,
    GET_USERS_ERROR,
    GET_USERS_SUCCESS
} from './constants'

function* getUsers({ payload }) {
	try {
		const { items } = yield call(Api.get, `/search/users?q=${payload}`)
        yield put({ type: GET_USERS_SUCCESS, list: items })
	} catch (e) {
		yield put({ type: GET_USERS_ERROR })
		toastr.error('ERROR', 'Failed get users list')
	}
}

export default function* profileSaga() {
	yield takeLatest(GET_USERS_REQUEST, getUsers);
}