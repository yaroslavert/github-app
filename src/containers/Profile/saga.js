import { takeLatest, put, call } from 'redux-saga/effects'
import Api from 'utils/api'
import { toastr } from 'react-redux-toastr'
import { push } from 'connected-react-router'

import {
	USER_UPDATE_REQUEST,
	USER_UPDATE_SUCCESS,
	USER_UPDATE_ERROR,
	USER_CHANGE_PASSWORD_REQUEST,
	USER_CHANGE_PASSWORD_SUCCESS,
	USER_CHANGE_PASSWORD_ERROR,
} from './constants'

function* userUpdate({ payload }) {
	const body = payload
	try {
		yield call(Api.patch, '/api/users/edit_profile', body)
		yield put({ type: USER_UPDATE_SUCCESS, body })
		toastr.success('SUCCESS', 'Update success')
	} catch (e) {
		yield put({ type: USER_UPDATE_ERROR })
		toastr.error('ERROR', 'Profile update could not be completed')
	}
}

function* changePassword({ payload }) {
	try {
		yield call(Api.post, '/api/staff/change_user_password', payload)
		yield put({ type: USER_CHANGE_PASSWORD_SUCCESS })
		yield put(push('/account/profile'))
		toastr.success('SUCCESS', 'Password edited success')
	} catch (e) {
		yield put({ type: USER_CHANGE_PASSWORD_ERROR })
		toastr.error('Error', 'Change User Password failed')
	}
}

export default function* profileSaga() {
	yield takeLatest(USER_UPDATE_REQUEST, userUpdate)
	yield takeLatest(USER_CHANGE_PASSWORD_REQUEST, changePassword)
}
