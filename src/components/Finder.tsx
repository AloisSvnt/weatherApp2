import { SearchInput } from "./SearchInput";
import { CityProps } from "../types/CityProps";
import { CityZIP } from "../types/CityZIP";
import { useCityFinder } from "../hooks/useCityFinder";

export const Finder: React.FC<CityProps> = ({ city, setCity }) => {
  const { result, clearResults, error } = useCityFinder(city.name);

  const handleCityClick = (selectedCity: CityZIP) => {
    console.log(selectedCity);
    
    setCity({
      name: selectedCity.nom,
      postalCode: String(selectedCity.codesPostaux[0]),
    });
    clearResults();
  };


  return (
    <>
      <SearchInput city={city} setCity={setCity} />
      <ul className="max-w-xs w-full flex flex-col m-0 p-0">
        {result.map((city: CityZIP, index: number) => (
          <li key={index} onClick={() => handleCityClick(city)} className="flex gap-4 justify-between py-3 px-4 cursor-pointer hover:bg-base-300 join-item rounded-lg">
            <p>{city.nom}</p>
            <p>{city.codesPostaux[0]}</p>
          </li>
        ))}
        {error && <li>{error}</li>}
      </ul>
    </>
  );
};
