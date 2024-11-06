import { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';

const API_URL = import.meta.env.VITE_CITY_LIST_API_URL;

export const useCitySearch = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const searchCity = async (city: string) => {
    try {
      const response = await fetch(`${API_URL}nom=${city}`);
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données');
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const debouncedSearchCity = useCallback(debounce(searchCity, 500), []); 

  return { debouncedSearchCity, data, error };
};
