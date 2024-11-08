import { CoordsData } from './CoordsData';

export type CoordsProps = {
  coords: CoordsData;
  setCoords: (coords : CoordsData) => void;
}