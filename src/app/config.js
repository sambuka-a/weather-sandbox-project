const REGION_BASE_URL = 'https://geocoding-api.open-meteo.com/v1/';

export const searchByTown = (town) => `${REGION_BASE_URL}search?name=${town}`;
console.log(searchByTown);