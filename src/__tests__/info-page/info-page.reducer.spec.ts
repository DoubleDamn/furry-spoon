import { initialState, infoPageReducer } from '../../info-page/info-page.reducer';
import { IS_LOADING, WEATHER_DATA_ERROR } from '../../info-page/info-page.action';

describe('Info Page reducer', () => {
	it('should return the default state, when it is undefined and no action passed', () => {
		expect(infoPageReducer(undefined, { type: undefined, payload: undefined })).toStrictEqual(
			initialState,
		);
	});

	it('should return the state object when no action is passed', () => {
		expect(infoPageReducer(initialState, { type: undefined, payload: undefined })).toBe(
			initialState,
		);
	});

	describe('fetching flag', () => {
		it('should return true when fetching data', () => {
			expect(infoPageReducer(initialState, IS_LOADING('Barcelona')).isLoading).toBeTruthy();
		});

		it('should return false when fetching has finished', () => {
			expect(infoPageReducer(initialState, WEATHER_DATA_ERROR('error')).isLoading).toBeFalsy();
		});
	});
});
