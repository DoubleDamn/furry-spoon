declare type WeatherState = {
  isLoading: boolean;
  weatherInfo: WeatherInfo;
};

declare type WeatherInfo = {
  weather: { main: string; description: string };
  wind: { speed: number; deg: number };
  temp: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
  };
  name: string;
};
