import { Reducer } from "redux";
import { WeatherActionType } from "./info-page.action";
import { WEATHER_ACTIONS } from "../typing/enam";

const infoPageReducer: Reducer<WeatherState, WeatherActionType> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case WEATHER_ACTIONS.IS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case WEATHER_ACTIONS.GET_WEATHER_DATA:
      console.log(action.payload,2);

      return {
        ...state,
        isLoading: false,
        weatherInfo: {
          weather: action.payload.weather[0],
          temp: action.payload.main,
          wind: action.payload.wind,
          name: action.payload.name
        }
      };
    case WEATHER_ACTIONS.WEATHER_DATA_ERROR:
      console.log(3, action.payload);

      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

const initialState: WeatherState = {
  isLoading: true,
  weatherInfo: null
};

export default infoPageReducer;
