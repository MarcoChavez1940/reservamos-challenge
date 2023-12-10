import { useEffect, useState } from "react";
import { getWeather } from "../services/weather.api";
import CityCard from "./CityCard";

import { Space } from 'antd';

const ListWeather = ({ name, lat, lon }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [weather, setWeather] = useState([])

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      const result = await getWeather({ lat, lon });
      setWeather(result)
      setIsLoading(false);
    }
    fetchData();
  }, [name])

  if (isLoading)
    return <div style={{ color: 'white' }}>Loading...</div>

  if (weather.length === 0)
    return <div style={{ color: 'white' }}>There is not result</div>

  return (
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
  )
}

export default ListWeather;
