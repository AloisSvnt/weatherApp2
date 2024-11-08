import { CityData } from './CityData';

export type CityProps = {
  city: CityData;
  setCity: (city: CityData) => void;
}