import { useState } from 'react';
import { CityProps } from '../types/City/CityProps';
import { CoordsProps } from '../types/Coords/CoordsProps';
import { WeatherProps } from '../types/Weather/WeatherProps';
import { DateProps } from '../types/Date/DateProps';
import { getCurrentData } from '../utils/getCurrentData';
import weatherNames  from '../config/WeatherNames';

import { WeatherIcon } from './WeatherIcon';

export const Card: React.FC<CityProps & CoordsProps & WeatherProps & DateProps > = ({city, coords, weatherData, setWeatherData, date}) => {

  const [seeMore, setSeeMore] = useState(false);

  if (!weatherData) {
    return <div>Loading...</div>;
  }
  const getCurrentWeather = getCurrentData(weatherData.timeseries);
  const dataInstant = getCurrentWeather.data.instant.details;

  return (
    <div className="card bg-base-100 w-full max-w-xs shadow-xl">
      <div className="card-body">
        <p className='text-right w-full text-xs'>{date.toDateString()}</p>
        {getCurrentWeather?.data?.next_12_hours?.summary?.symbol_code ? (
          <WeatherIcon icon={getCurrentWeather.data.next_12_hours.summary.symbol_code} />
        ) : (
          <p>No weather icon available</p>
        )}
        <p className='text-3xl w-full text-center'>{dataInstant.air_temperature}°C</p>

          <h2 className="card-title text-3xl">{city.name}</h2>
          <p className='text-xl'>{weatherNames[getCurrentWeather.data.next_12_hours.summary.symbol_code]}</p>
        <div className='flex justify-between w-full'>
        </div>

        <p>Wind Speed: {dataInstant.wind_speed} m/s</p>
        <p>Wind Direction: {dataInstant.wind_from_direction} °</p>

        {seeMore && (
          <div>
            <p>Air Pressure: {dataInstant.air_pressure_at_sea_level} hPa</p>
            <p>Dew Point Temperature: {dataInstant.dew_point_temperature} °C</p>
            <p>Relative Humidity: {dataInstant.relative_humidity} %</p>
            <p>Fog Area Fraction: {dataInstant.fog_area_fraction} %</p>
            <p>UV Index (Clear Sky): {dataInstant.ultraviolet_index_clear_sky}</p>

            <p>Total Cloud Cover: {dataInstant.cloud_area_fraction} %</p>
            <p>High Cloud Cover: {dataInstant.cloud_area_fraction_high} %</p>
            <p>Medium Cloud Cover: {dataInstant.cloud_area_fraction_medium} %</p>
            <p>Low Cloud Cover: {dataInstant.cloud_area_fraction_low} %</p>
          </div>
        )}

        <button className="btn btn-primary" onClick={() => setSeeMore(!seeMore)}>
          {seeMore ? 'See Less' : 'See More'}
        </button>

      </div>
    </div>
  )
};