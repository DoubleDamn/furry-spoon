declare type WeatherState = {
	isLoading: boolean;
	weatherInfo: WeatherInfo;
	error: { message: string; code: number };
};

declare type WeatherInfo = {
	weather: { main: string; description: string };
	wind: { speed: number; deg: number };
	temp: TemperatureDetails;
	name: string;
};

declare type TemperatureDetails = {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	humidity: number;
	wind: number;
};

declare type WidgetBody = {
	title: string;
	value: number;
	mark: string;
};
