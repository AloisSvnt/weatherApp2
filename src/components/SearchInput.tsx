import React from 'react';
import { CityProps } from "../types/CityProps";


export const SearchInput: React.FC<CityProps> = ({ city, setCity }) => {

  const setAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity({ name: e.target.value, postalCode: '' });
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
