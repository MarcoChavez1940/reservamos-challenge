import { useState } from "react";
import { getCity } from "../../services/cities.api";
import ListWeather from '../ListWeather';
import { Input } from 'antd';

const { Search } = Input;

const SearchCityWeather = () => {
  const [cityName, setCityName] = useState('');
  const [status, setStatus] = useState('');
  const [city, setCity] = useState({ name: '', lat: '', long: '' });

  const handleCityName = (e) => {
    setCityName(e.target.value);
  }

  const onSearch = async (value, _e, info) => {
    setStatus('');
    if (value.length === 0) {
      setStatus('error');
    } else {
      const result = await getCity(value);
      if (result !== null) {
        setCity({ name: result.city_name, lat: result.lat, long: result.long });
        setCityName(result.city_name);
      } else {
        setCity({ name: '', lat: '', long: '' });
      }
    }
  }

  return (
    <div>
      <>
        <Search placeholder="Search city" onChange={handleCityName} onSearch={onSearch} value={cityName} status={status} enterButton />
        {status === 'error' && <ErrorMessage>Required Field</ErrorMessage>}
      </>
      {city.name.length === 0 && <div style={{ color: "white", margin: '16px 0px', fontSize: '1.5rem' }}>City not found</div>}
      {city.name.length > 0 &&
        <>
          <div style={{ color: "white", margin: '16px 0px', fontSize: '1.5rem' }}>{city.name}</div>
          <ListWeather name={city.name} lat={city.lat} lon={city.long} />
        </>
      }
    </div>
  )
}

const ErrorMessage = ({ children }) => {
  return <span style={{ fontSize: '1rem', color: 'red' }}>{children}</span>
};

export default SearchCityWeather;
