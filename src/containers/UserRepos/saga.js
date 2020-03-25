import { takeLatest, put, call } from 'redux-saga/effects'
import Api from 'utils/api'
import { toastr } from 'react-redux-toastr'

import {
	GET_USER_REPOS_REQUEST,
	GET_USER_REPOS_ERROR,
	GET_USER_REPOS_SUCCESS
} from './constants'

function* getUserRepos({ payload }) {
	try {
		const list = yield call(Api.get, `/users/${payload}/repos`)
        yield put({ type: GET_USER_REPOS_SUCCESS, list })
	} catch (e) {
		yield put({ type: GET_USER_REPOS_ERROR })
		toastr.error('ERROR', 'Failed get user reposetories')
	}
}

export default function* profileSaga() {
	yield takeLatest(GET_USER_REPOS_REQUEST, getUserRepos);
}