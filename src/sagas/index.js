import { fork, all } from 'redux-saga/effects';
//import * as UserSaga from './UserSaga';

import * as TransactionSaga from './TransactionSaga';

export default function* rootSaga() {
  yield all(
    [
     ...Object.values(TransactionSaga),
    ].map(fork),
  );
}
