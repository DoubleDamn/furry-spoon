import { takeLatest, call, put, all, delay } from 'redux-saga/effects';
import history from '../../common/helpers/history';

import { WEATHER_ACTIONS } from '../../typing/enum';
import {
	getWeatherForecast,
	WeatherActionType,
	GET_WEATHER_DATA,
	WEATHER_DATA_ERROR,
} from '../info-page.action';

export function* watcherSaga() {
	yield takeLatest(WEATHER_ACTIONS.IS_LOADING, workerSaga);
}

export function* workerSaga(action: WeatherActionType) {
	// {payload}: any
	try {
		const { data } = yield getWeatherForecast(action.payload);

		yield delay(500);

		// dispatch a success action to the store with the new item
		yield put(GET_WEATHER_DATA(data));
	} catch (error) {
		console.log(error);
		// dispatch a failure action to the store with the error
		if (error.response.status === 404) {
			yield history.push('/page-not-found');
		} else {
			yield put(WEATHER_DATA_ERROR(error));
		}
	}
}

export function* rootSaga() {
	yield all([watcherSaga()]);
}
