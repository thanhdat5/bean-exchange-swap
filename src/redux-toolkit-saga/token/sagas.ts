import { PayloadAction } from '@reduxjs/toolkit';
import { all, put, takeLatest } from 'redux-saga/effects';

import {
	getTokensAct,
	setLoadingState,
	setRequestInfoState,
	updateTokensState
} from './slice';
import { ResponseListGenerator } from 'types/api/common-response.model';
import { IGetTokensRequest, IYourToken } from 'types/token.model';
import { getTokens } from 'services/token.api';

function* getTokensSaga(action: PayloadAction<IGetTokensRequest>) {
	try {
		yield put(setLoadingState(true));
		const response: ResponseListGenerator<IYourToken> = yield getTokens(
			action.payload
		);
		yield put(updateTokensState(response.data));
		yield put(
			setRequestInfoState({
				action: action,
				success: response
			})
		);
		yield put(setLoadingState(false));
	} catch (error) {
		yield put(
			setRequestInfoState({
				action: action,
				error: error
			})
		);
		yield put(setLoadingState(false));
	}
}
export default function* tokenSaga() {
	yield all([takeLatest(getTokensAct.type, getTokensSaga)]);
}
