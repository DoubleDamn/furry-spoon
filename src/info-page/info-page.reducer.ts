import { Reducer } from "redux";
import { WeatherActionType, WEATHER_ACTIONS } from "./info-page.action";

const infoPageReducer: Reducer<WeatherState, WeatherActionType> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case WEATHER_ACTIONS.IS_LOADING:
      console.log(2, state);

      return {
        ...state,
        isLoading: true
      };
    case WEATHER_ACTIONS.GET_WEATHER_DATA:
      return {
        ...state,
        isLoading: false
      };
      // case WEATHER_ACTIONS.FETCH_DATA:
      //   return {
      //     ...state,
      //     isLoading: false
      //   };
    default:
      return state;
  }
};

const initialState: WeatherState = {
  isLoading: false,
  hyi: ""
};

export default infoPageReducer;
