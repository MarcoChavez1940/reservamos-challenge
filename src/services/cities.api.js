import axios from 'axios';

const api = axios.create({
  baseURL: 'https://search.reservamos.mx/api/v2',
});

export async function getCity(city) {
  const result = await api.get(`/places`,
    { params: { q: city } }
  );

  if(result.data.length > 0){
    return result.data.find(place => place.result_type === 'city');
  }
  return null;
}
