import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});
const appid = process.env.REACT_APP_OPENWEATHER_APPID;

// Take a forecast of each day
function is6AM(unixTimestamp) {
  const date = new Date(unixTimestamp * 1000);

  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Check if is 6 AM
  return hours === 6 && minutes === 0;
}

export async function getWeather({ lat, lon, units = 'metric' }) {
  const result = await api.get(`/forecast`,
    { params: { lat, lon, units, appid } }
  );

  const resultDays6am = result.data.list.filter(forecast => is6AM(forecast.dt));

  return resultDays6am;
}
