import {  put, call, takeEvery } from 'redux-saga/effects';
import {  ActionTypes } from '../actions';
import API from '../api/NetworkHandler';


const { POST_TRANSACTION, SHOW_GLOBAL_LOADER, HIDE_GLOBAL_LOADER, SHOW_ALERT, FETCH_OFFERS, POPULATE_OFFERS } = ActionTypes;


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


export function* transactionSaga() {
  yield takeEvery(POST_TRANSACTION, postTransactions);
  yield takeEvery(FETCH_OFFERS, fetchOffers);
}
