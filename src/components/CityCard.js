function formatDate(unixTimestamp) {
  const date = new Date(unixTimestamp * 1000);
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const formatDay = date.toLocaleDateString('en-EN', options);
  const formatHour = date.toLocaleTimeString('en-EN');

  return `${formatDay}`;
}

const CityCard = ({ day, temp, tempMin, tempMax, weather, weatherImg }) => {
  return (
    <div style={{ height: '80px', borderRadius: '20px', backgroundColor: 'white', padding: '16px' }}>
      <div style={{ height: '80px', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'start' }}>
          <div>{formatDate(day)}</div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div>{weather}</div>
            <img src={`https://openweathermap.org/img/wn/${weatherImg}.png`} style={{ width: 30, height: 30 }} />
          </div>

        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '2rem' }}>
            {Math.trunc(temp)}°
          </div>
          <div>
            Min: {Math.trunc(tempMin)}° - Max: {Math.trunc(tempMax)}°
          </div>
        </div>
      </div>
    </div>
  )
}

export default CityCard;
