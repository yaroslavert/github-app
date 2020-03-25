import { takeLatest, put, call } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import Api from 'utils/api'
import { setToken } from 'utils/auth'

import {
	AUTH_LOGIN_REQUEST,
	AUTH_LOGIN_ERROR,
	AUTH_LOGIN_SUCCESS,
	AUTH_REGISTER_REQUEST,
	AUTH_REGISTER_SUCCESS,
	AUTH_REGISTER_ERROR,
	AUTH_SELLER_REQUEST,
	AUTH_SELLER_SUCCESS,
	AUTH_SELLER_ERROR,
	AUTH_RESET_PASSWORD_REQUEST,
	AUTH_RESET_PASSWORD_SUCCESS,
	AUTH_RESET_PASSWORD_ERROR,
	AUTH_RESTORE_PASSWORD_REQUEST,
	AUTH_RESTORE_PASSWORD_SUCCESS,
	AUTH_RESTORE_PASSWORD_ERROR,
} from './constants'

function* login({ payload }) {
	const { email, password } = payload

	try {
		const body = {
			email,
			password,
			longterm: true,
		}
		const data = yield call(Api.post, '/api/users/login/email', body)
		setToken(data.token)
		yield put({ type: AUTH_LOGIN_SUCCESS })
		yield put(push('/listing'))
	} catch (e) {
		yield put({ type: AUTH_LOGIN_ERROR })
	}
}

function* registration({ payload }) {
	try {
		yield call(Api.post, '/api/users/register', payload)
		yield put({ type: AUTH_REGISTER_SUCCESS })
	} catch (e) {
		yield put({ type: AUTH_REGISTER_ERROR })
	}
}

function* seller({ payload }) {
	const { marketplace_id, sellerId, mwsAuthToken } = payload

	try {
		const body = {
			marketplace_id,
			sellerId,
			mwsAuthToken,
		}
		yield call(Api.post, '/api/seller', body)
		yield put({ type: AUTH_SELLER_SUCCESS })
	} catch (e) {
		yield put({ type: AUTH_SELLER_ERROR })
	}
}

function* resetPassword({ payload }) {
	const { email } = payload

	try {
		const body = {
			email,
			lang: 'en',
		}
		yield call(Api.post, '/api/users/password/reset', body)
		yield put({ type: AUTH_RESET_PASSWORD_SUCCESS })
	} catch (e) {
		yield put({ type: AUTH_RESET_PASSWORD_ERROR })
	}
}

function* restorePassword({ payload }) {
	try {
		yield call(Api.post, '/api/users/password/restore', payload)
		yield put({ type: AUTH_RESTORE_PASSWORD_SUCCESS })
	} catch (e) {
		yield put({ type: AUTH_RESTORE_PASSWORD_ERROR })
	}
}

export default function* authSaga() {
	yield takeLatest(AUTH_LOGIN_REQUEST, login)
	yield takeLatest(AUTH_REGISTER_REQUEST, registration)
	yield takeLatest(AUTH_SELLER_REQUEST, seller)
	yield takeLatest(AUTH_RESET_PASSWORD_REQUEST, resetPassword)
	yield takeLatest(AUTH_RESTORE_PASSWORD_REQUEST, restorePassword)
}
