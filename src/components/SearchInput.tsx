import React from 'react';
import { CityProps } from "../types/City/CityProps";

interface SearchInputProps extends CityProps {
  onInputChange?: () => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({ 
  city, 
  setCity, 
  onInputChange 
}) => {
  const setAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity({ name: e.target.value, postalCode: '' });
    onInputChange?.();
  };

  return (
    <div className="max-w-xs w-full">
      <input
        type="text"
        placeholder="Search a city"
        className="input input-bordered input-primary w-full !outline-none"
        value={city.name}
        onChange={setAddress}
      />
    </div>
  );
};