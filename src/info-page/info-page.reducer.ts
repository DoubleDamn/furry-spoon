import { Reducer } from 'redux';
import { WeatherActionType } from './info-page.action';
import { WEATHER_ACTIONS } from '../typing/enam';

export const infoPageReducer: Reducer<WeatherState, WeatherActionType> = (
	state = initialState,
	action,
) => {
	switch (action.type) {
		case WEATHER_ACTIONS.IS_LOADING:
			return {
				...state,
				isLoading: true,
			};
		case WEATHER_ACTIONS.GET_WEATHER_DATA:
			return {
				...state,
				isLoading: false,
				weatherInfo: {
					weather: action.payload.weather[0],
					temp: action.payload.main,
					wind: action.payload.wind,
					name: action.payload.name,
				},
			};
		case WEATHER_ACTIONS.WEATHER_DATA_ERROR:
			return {
				...state,
				isLoading: false,
				errorMsg: action.payload,
			};
		default:
			return state;
	}
};

export const initialState: WeatherState = {
	isLoading: true,
	weatherInfo: null,
	errorMsg: null,
};
