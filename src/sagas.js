import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import * as types from './types';
import request from './api';

function findAllSuccess(tasks) {
    return {
        type: types.FIND_ALL_SUCCESS,
        tasks
    };
}

function findAllError(err) {
    return {
        type: types.FIND_ALL_ERROR,
        error: err.message || ""
    };
}

function* refresh(action) {
    try {
        const data = yield call(request, '/tasks');
        yield put(findAllSuccess(data));
    } catch (e) {
        yield put(findAllError(e));
    }
}

export function* refreshSaga() {
    yield takeEvery(types.FIND_ALL, refresh);
}
