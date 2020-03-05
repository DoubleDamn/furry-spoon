import axios from "axios";
import { takeLatest, call, put } from "redux-saga/effects";
import { WEATHER_ACTIONS } from "../typing/enam";

const API_KEY = "appid=28a658487aea99c56a8209ff5fbe7387";
export const BASE_URL = "https://api.openweathermap.org/data/2.5";

export type WeatherActionType = ReturnType<
  typeof IS_LOADING | typeof GET_WEATHER_DATA
>;

export const IS_LOADING = () =>
  <const>{
    type: WEATHER_ACTIONS.IS_LOADING
  };

export const GET_WEATHER_DATA = (data: any) =>
  <const>{
    type: WEATHER_ACTIONS.GET_WEATHER_DATA,
    payload: data
  };

// function* loadData(action) {
//     try {
//       // data is obtained after axios call is resolved
//       let { data } = yield call(loginApi, action.payload);
//       console.log(data);

//       // store data to localStorage
//       Object.keys(data.session).forEach(key => {
//         localStorage.setItem(key, data[key]);
//       });

//       // dispatch action to change redux state
//       yield put(updateProfile(data.profile));

//     } catch (e) {
//         console.log("error", e);
//     }
//   }

export const getWeatherForecast = (cityName: string) => (dispatch: any) => {
  console.log(1);

  axios
    .get(`${BASE_URL}/weather?q=${cityName}&${API_KEY}`, {
      headers: { "Content-Type": "application/json" }
    })
    .then(response => {
      console.log("response", response.data);
      dispatch(GET_WEATHER_DATA(response.data));
    })
    .catch(error => {
      console.log("error", error);
    });
};

// export const getCityWeatherForecast = (cityId: any) => {
//   return axios.get(`${URL}?id=${cityId}&${apiKey}&units=metric`, {
//     headers: { "Content-Type": "application/json" }
//   });
// };
