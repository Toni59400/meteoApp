const api_key = "92b1660ebc8ac9af4ccd67a582aeb9ac2d27f67372136c31571beac08d99f98a"; 

export default function getMeteo(keyword) { 
  const url = 'https://api.meteo-concept.com/api/forecast/daily?token=' +api_key+'&insee='+keyword
  return fetch(url) 
  .then((response) => response.json()) 
  .catch((error) => console.error(error)) 
}
