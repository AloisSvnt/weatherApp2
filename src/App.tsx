import { useState } from "react"
import { CityData } from "./types/CityData";
import { Card } from "./components/Card";
import { Finder } from "./components/Finder";

function App() {
  const [city, setCity] = useState<CityData>({ name: '', postalCode: '' });
  // const [lat, setLat] = useState('');
  // const [long, setLong] = useState('');
  // const [weatherData, setWeatherData] = useState('');
  
  return (
    <main className="h-screen w-screen flex flex-col justify-center items-center gap-4">
      <Finder city={city} setCity={setCity} />
      <div className="flex gap-2">
        {city.name ? <Card city={city} setCity={setCity}/> : <p>Search a city</p>}
      </div>
    </main>
  );
}

export default App
