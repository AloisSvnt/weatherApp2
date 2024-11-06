import { useState, useEffect, useCallback } from "react";
import { CityZIP } from "../types/CityZIP";
import { useCitySearch } from "../hooks/useCitySearch";

export const useCityFinder = (cityName: string) => {
  const { debouncedSearchCity, data, error } = useCitySearch();
  const [result, setResult] = useState<CityZIP[]>([]);

  const memoizedSearchCity = useCallback(debouncedSearchCity, [debouncedSearchCity]);

  useEffect(() => {
    if (cityName.length >= 3) {
      memoizedSearchCity(cityName);
    }
  }, [cityName, memoizedSearchCity]);

  useEffect(() => {
    if (data) {
      setResult(data);
    }
  }, [data]);

  const clearResults = () => {
    setResult([]);
  };

  return {
    result,
    clearResults,
    error,
  };
};
