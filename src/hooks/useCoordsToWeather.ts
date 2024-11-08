import { useState } from "react";
import { WEATHER_API_URL } from "../API/apiConfig";

const API_URL = WEATHER_API_URL;

export const useCoordsToWeather = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const getWeather = async (lat: number, long: number) => {
    try {
      const response = await fetch(`${API_URL}lat=${lat}&lon=${long}`);
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données');
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const clearWeatherResults = () => {
    setData(null);
  };

  return { data, error, getWeather, clearWeatherResults };


}