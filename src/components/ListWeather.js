import { useEffect, useState } from "react";
import { getWeather } from "../services/weather.api";
import CityCard from "./CityCard";

import { Space, Switch } from 'antd';

const ListWeather = ({ name, lat, lon }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState([])

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      const result = await getWeather({ lat, lon, units });
      setWeather(result)
      setIsLoading(false);
    }
    fetchData();
  }, [name, units]);

  const changeUnits = (checked) => {
    if (checked) {
      setUnits('metric')
    } else {
      setUnits('imperial');
    }
  };

  if (isLoading)
    return <div style={{ color: 'white' }}>Loading...</div>

  if (weather.length === 0)
    return <div style={{ color: 'white' }}>There is not result</div>

  return (
    <div>
      <Space size={8}>
        <p style={{ color: 'white' }}>F°</p>
        <Switch checked={units === 'metric'} onChange={changeUnits} style={{ backgroundColor: units === 'metric' ? 'green' : 'blue' }} />
        <p style={{ color: 'white' }}>C°</p>
      </Space>

      <Space direction="vertical" size={16} style={{ width: '100%' }}>
        {weather.map((forecast, i) => {
          return (
            <CityCard
              key={i}
              day={forecast.dt}
              tempMin={forecast.main.temp_min}
              temp={forecast.main.temp}
              tempMax={forecast.main.temp_min}
              weather={forecast.weather[0].description}
              weatherImg={forecast.weather[0].icon}
            />
          )
        })}
      </Space>
    </div>

  )
}

export default ListWeather;
