import { createSelector } from 'reselect';

const getWeather = (state: WeatherState) => state.weatherInfo.weather;
const getTemperature = (state: WeatherState) => state.weatherInfo.temp.temp;
const getTemperatureDetails = (state: WeatherState) => state.weatherInfo.temp;
const getName = (state: WeatherState) => state.weatherInfo.name;
const getWind = (state: WeatherState) => state.weatherInfo.wind;

export const widgetHeaderSelector = createSelector(
	[getName, getWeather, getTemperature],
	(name, weather, temperature) => {
		return { name, weather, temperature };
	},
);

const createProperty = (title: string, value: number, mark: string): WidgetBody => ({
	title,
	value,
	mark,
});

export const widgetBodySelector = createSelector(
	[getTemperatureDetails, getWind],
	(tempDetails, wind) => {
		const degSign = '\u00B0';
		const titles = [
			'Temperature',
			'Feels like',
			'Minimal temperature',
			'Maximum temperature',
			'Pressure',
			'Humidity',
			'Wind',
		];
		const weatherProperties: TemperatureDetails = { ...tempDetails, ...{ wind: wind.speed } };

		return Object.keys(weatherProperties).reduce((propsArr, curr: keyof TemperatureDetails, i) => {
			const mark = curr.includes('wind')
				? 'm/s'
				: curr === 'humidity'
				? '%'
				: curr === 'pressure'
				? 'hpa'
				: `${degSign}C`;

			return [...propsArr, createProperty(titles[i], weatherProperties[curr], mark)];
			//return [...propsArr, {title: titles[i], value: weatherProperties[curr], mark}];
		}, []);
	},
);
