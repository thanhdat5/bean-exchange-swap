import {
	configureStore,
	ThunkAction,
	Action,
	PreloadedState
} from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './rootSaga';
// @ts-ignore
import { ArgumentError, promiseMiddleware } from '@adobe/redux-saga-promise';
import { combineReducers } from '@reduxjs/toolkit';
import { rootReducer as appReducers } from 'redux-toolkit-saga';

const rootReducer = combineReducers(appReducers);

const sagaMiddleware = createSagaMiddleware({
	onError: (error: any) => {
		if (error instanceof ArgumentError) {
			console.log(
				'Oops, programmer error! I called redux-saga-promise incorrectly:',
				error
			);
		} else {
			// ...
		}
	}
});
export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
	return configureStore({
		preloadedState,
		reducer: rootReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware({
				serializableCheck: false,
				immutableCheck: false
			})
				.concat(sagaMiddleware)
				.concat(promiseMiddleware)
	});
};
export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
			immutableCheck: false
		})
			.concat(sagaMiddleware)
			.concat(promiseMiddleware)
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
