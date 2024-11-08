import { useState } from 'react';
import { CoordsData } from '../types/Coords/CoordsData';
import { GEOCODE_API_URL } from '../API/apiConfig';

export const useCityToCoords = () => {
  const [coordsResult, setCoordsResult] = useState<CoordsData | null>(null);

  const getCoords = async (city: {name:string, postalCode: string}) => {
    try {
      const response = await fetch(`${GEOCODE_API_URL}${city.name},${city.postalCode}`);
      const data = await response.json();
      setCoordsResult({ lat: data.features[0].geometry.coordinates[1], long: data.features[0].geometry.coordinates[0] });
    } catch (error) {
      console.error(error);
    }
  }

  const clearCoordsResults = () => {
    setCoordsResult(null);
  };

  return { coordsResult, getCoords, clearCoordsResults };
}