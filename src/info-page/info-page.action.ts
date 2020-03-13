import axios from "axios";
import { WEATHER_ACTIONS } from "../typing/enum";

const API_KEY = "appid=28a658487aea99c56a8209ff5fbe7387";
export const BASE_URL = "https://api.openweathermap.org/data/2.5";

export type WeatherActionType = ReturnType<
  typeof IS_LOADING | typeof GET_WEATHER_DATA | typeof WEATHER_DATA_ERROR
>;

export const IS_LOADING = (cityName: string) =>
  <const>{
    type: WEATHER_ACTIONS.IS_LOADING,
    payload: cityName
  };

export const GET_WEATHER_DATA = (data: any) =>
  <const>{
    type: WEATHER_ACTIONS.GET_WEATHER_DATA,
    payload: data
  };

export const WEATHER_DATA_ERROR = (error: any) =>
  <const>{
    type: WEATHER_ACTIONS.WEATHER_DATA_ERROR,
    payload: error
  };

export const getWeatherForecast = (cityName: string) => {
  return axios.get(
    `${BASE_URL}/weather?q=${cityName}&${API_KEY}&units=metric`,
    {
      headers: { "Content-Type": "application/json" }
    }
  );
};
