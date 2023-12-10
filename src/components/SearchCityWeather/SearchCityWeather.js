import { useState } from "react";
import Searchbar from '../Searchbar';
import { getCity } from "../../services/cities.api";

const SearchCityWeather = () => {
  const [city, setCity] = useState({ name: '', lat: '', long: '' });

  const handleCitySearch = async (cityName) => {
    const result = await getCity(cityName);
    console.log("result getCity", result);
    setCity({ name: result.city_name, lat: result.lat, long: result.long });
  };

  return (
    <div>
      <Searchbar onChange={handleCitySearch} />
      <div style={{ color: "white", margin: '16px 0px', fontSize: '1.5rem' }}>{city.name}</div>
    </div>
  )
}

export default SearchCityWeather;