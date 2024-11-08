import React, { useEffect } from "react";
import { SearchInput } from "./SearchInput";
import { CityProps } from "../types/City/CityProps";
import { CityZIP } from "../types/City/CityZIP";
import { CoordsProps } from "../types/Coords/CoordsProps";
import { useCityFinder } from "../hooks/useCityFinder";
import { useCityToCoords } from "../hooks/useCityToCoords";

export const Finder: React.FC<CityProps & CoordsProps> = ({ city, setCity, setCoords }) => {
  const { result, error, selectCity, resetSelection } = useCityFinder(city.name);
  const { coordsResult, getCoords, clearCoordsResults } = useCityToCoords();

  const handleCityClick = (selectedCity: CityZIP) => {
    setCity({
      name: selectedCity.nom,
      postalCode: String(selectedCity.codesPostaux[0]),
    });

    getCoords({
      name: selectedCity.nom,
      postalCode: String(selectedCity.codesPostaux[0]),
    });
    
    selectCity();
  };

  useEffect(() => {
    if (coordsResult) {
      setCoords({lat : coordsResult.lat, long:  coordsResult.long});
      clearCoordsResults();
    }
  }, [coordsResult, setCoords, clearCoordsResults]);

  return (
    <div className="relative max-w-xs w-full ">
      <SearchInput 
        city={city} 
        setCity={setCity} 
        onInputChange={resetSelection} 
      />
      {result.length > 0 && (
        <ul className="flex flex-col m-0 p-0 max-h-64 overflow-scroll absolute w-full z-50 bg-base-200 rounded-b-full">
          {result.map((city: CityZIP, index: number) => (
        <li 
          key={index} 
          onClick={() => handleCityClick(city)} 
          className="flex gap-4 justify-between py-3 px-4 cursor-pointer hover:bg-base-300 join-item rounded-lg"
        >
          <p>{city.nom}</p>
          <p>{city.codesPostaux[0]}</p>
        </li>
          ))}
          {error && <li>{error}</li>}
        </ul>
      )}
    </div>
  );
};