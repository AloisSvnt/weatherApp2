import { useState, useEffect, useCallback } from "react";
import { CityZIP } from "../types/City/CityZIP";
import { useCitySearch } from "../hooks/useCitySearch";

export const useCityFinder = (cityName: string) => {
  const { debouncedSearchCity, data, error } = useCitySearch();
  const [result, setResult] = useState<CityZIP[]>([]);
  const [isSelected, setIsSelected] = useState(false);

  const memoizedSearchCity = useCallback(debouncedSearchCity, [
    debouncedSearchCity,
  ]);

  useEffect(() => {
    if (!isSelected && cityName.length >= 3) {
      memoizedSearchCity(cityName);
    }
  }, [cityName, memoizedSearchCity, isSelected]);

  useEffect(() => {
    if (data) {
      setResult(data);
    }
  }, [data]);

  const clearResults = () => {
    setResult([]);
  };

  const selectCity = () => {
    setIsSelected(true);
    clearResults();
  };

  const resetSelection = () => {
    setIsSelected(false);
  };

  return {
    result,
    clearResults,
    error,
    selectCity,
    resetSelection,
    isSelected,
  };
};