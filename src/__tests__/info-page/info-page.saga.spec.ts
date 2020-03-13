import { workerSaga, watcherSaga } from '../../info-page/helpers/info-page.saga';

import { put, takeEvery, all, call, takeLatest, delay } from 'redux-saga/effects';
import { WEATHER_ACTIONS } from '../../typing/enum';
// import { IS_LOADING, getWeatherForecast } from '../../info-page/info-page.action';
import * as action from '../../info-page/info-page.action';

describe('Saga generator test', () => {
	const genObject = watcherSaga();
	it('should run only latest IS_LOADING action and call workerSaga', () => {
		expect(genObject.next().value).toEqual(takeLatest(WEATHER_ACTIONS.IS_LOADING, workerSaga));
	});

	it('should be done on next iteration', () => {
		expect(genObject.next().done).toBeTruthy();
	});
});

describe('Saga worker test', () => {
	const gen = workerSaga(action.IS_LOADING('Barcelona'));

	afterEach(() => {
		jest.clearAllMocks();
	});

	const mockData = { data: { weather: 'cloud' } };
	// const mock = jest.fn(name => Promise.resolve(mockData));

	const api = jest.spyOn(action, 'getWeatherForecast');

	it('saga return data from get request - first next', () => {
		const data = gen.next().value;
		console.log(data);
		expect(data).toEqual(Promise.resolve(mockData));
	});

	it('delay for 400ms - second next', () => {
		console.log(gen.next());

		expect(gen.next()).toEqual(delay(400));
	});
});

// test('saga should return a data from Api call', async () => {
// 	const dispatchedActions = [];

// 	const fakeStore = {
// 		getState: () => ({ isLoading: true }),
// 		dispatch: action => dispatchedActions.push(action),
// 	};

// 	const mock = jest
// 		.spyOn(getWeatherForecast, 'get')
// 		.mockImplementation(name => Promise.resolve(mockData));
// 	jest.fn(name => Promise.resolve(mockData));
// gen.next(), put({ type: 'INCREMENT' });
// });
