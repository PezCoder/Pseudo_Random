import {  put, call, takeEvery } from 'redux-saga/effects';
import {  ActionTypes } from '../actions';
import API from '../api/NetworkHandler';


const { POST_TRANSACTION, SHOW_GLOBAL_LOADER, HIDE_GLOBAL_LOADER,
    SHOW_ALERT, FETCH_OFFERS, POPULATE_OFFERS, POPULATE_UPCOMING_BADGE,
    FETCH_UPCOMING_BADGE, FETCH_COMPLETED_BADGE, POPULATE_COMPLETED_BADGE } = ActionTypes;


function* postTransactions(action) {
  let response;
  const { payload } = action;
  try {
    yield put({ type: SHOW_GLOBAL_LOADER});
    response = yield call(API.sendRequest, 'post', '/transaction', payload);
    yield put({ type: HIDE_GLOBAL_LOADER });
    yield put({ type: SHOW_ALERT, payload: { message: 'Successfully Ordered', type: 'success' } });
    window.location = '/';
  } catch (e) {
    console.error(e);
    yield put({ type: HIDE_GLOBAL_LOADER });
    yield put({ type: SHOW_ALERT, payload: { message: 'Network Error', type: 'error' } });
  }
}

function* fetchOffers(action) {
    let response;
    const {payload = {}} = action;
    try {
        response = yield call(API.sendRequest, 'get', `/offers?lat=${payload.latitude}&long=${payload.longitude}`);
        yield put({ type: POPULATE_OFFERS, payload: response.data });
    } catch (e) {
        console.error('error', e);
    }
}

function* fetchCompletedBadge(action) {
    let response;
    try {
        response = yield call(API.sendRequest, 'get', `/completed-badge`);
        yield put({ type: POPULATE_COMPLETED_BADGE, payload: response.data });
    } catch (e) {
        console.error('error', e);
    }
}

function* fetchUpComingBadge(action) {
    let response;
    try {
        response = yield call(API.sendRequest, 'get', `/upcoming-badge`);
        yield put({ type: POPULATE_UPCOMING_BADGE, payload: response.data });
    } catch (e) {
        console.error('error', e);
    }
}


export function* transactionSaga() {
  yield takeEvery(POST_TRANSACTION, postTransactions);
  yield takeEvery(FETCH_OFFERS, fetchOffers);
  yield takeEvery(FETCH_COMPLETED_BADGE, fetchCompletedBadge);
  yield takeEvery(FETCH_UPCOMING_BADGE, fetchUpComingBadge);
}
