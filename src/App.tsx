import React, { useState, useEffect, useCallback, useRef } from 'react';
import { CityData } from './types/City/CityData';
import { CoordsData } from './types/Coords/CoordsData';
import { WeatherData } from './types/Weather/WeatherData';
import { Card } from './components/Card';
import { Finder } from './components/Finder';
import { useCoordsToWeather } from './hooks/useCoordsToWeather';
import TimeDiff from './components/TimeDiff';

function App() {
  const [city, setCity] = useState<CityData>({ name: '', postalCode: '' });
  const [coords, setCoords] = useState<CoordsData>({ lat: null, long: null });
  const [weatherData, setWeatherData] = useState<WeatherData>();

  const { getWeather, data } = useCoordsToWeather();
  const prevCoords = useRef(coords);

  const fetchWeather = useCallback(() => {
    if (coords.lat && coords.long) {
      getWeather(coords.lat, coords.long);
    }
  }, [coords, getWeather]);

  useEffect(() => {
    if (prevCoords.current.lat !== coords.lat || prevCoords.current.long !== coords.long) {
      fetchWeather();
      prevCoords.current = coords;
    }
  }, [coords, fetchWeather]);

  useEffect(() => {
    if (data) {
      setWeatherData(data.properties);
    }
  }, [data]);

  useEffect(() => {
    if(!city.name) {
      setWeatherData(undefined);
    };
  }, [city.name, setWeatherData]);

  return (
    <main className="h-screen w-screen flex flex-col justify-center items-center gap-4">
      <Finder city={city} setCity={setCity} coords={coords} setCoords={setCoords}/>
        {city.postalCode ? <Card city={city} setCity={setCity} coords={coords} setCoords={setCoords} weatherData={weatherData} setWeatherData={setWeatherData} date={new Date()}/> : <p>Search a city</p>}
      {weatherData?.meta?.updated_at && <TimeDiff updatedAt={weatherData.meta.updated_at} />}
    </main>
  );
}

export default App;