import { all, fork } from 'redux-saga/effects';
import { reducer as token, saga as tokenSaga } from './token';
export const rootReducer = {
	token
};

export function* rootSaga() {
	yield all([
		fork(tokenSaga)
	]);
}
