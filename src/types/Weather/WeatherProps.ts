import { WeatherData } from './WeatherData';

export type WeatherProps = {
  weatherData: WeatherData | any;
  setWeatherData: (weather : WeatherData) => void;
}