import React from 'react';
import { CityProps } from '../types/CityProps';

export const Card: React.FC<CityProps> = ({city}) => {
  return (
    <div className="card bg-base-100 w-full max-w-xs shadow-xl">
    <div className="card-body">
      <h2 className="card-title">{city.name}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
    </div>
  </div>
  )
};