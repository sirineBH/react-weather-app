// Configuration for OpenWeatherMap  API
// The documentation state that searching by country name is available... I opted for the optimized solution

const API_URL = "https://api.openweathermap.org/data/2.5/";
const API_KEY = process.env.REACT_APP_API_KEY;

const SEARCH_BASE_URL = `${API_URL}forecast?appid=${API_KEY}&units=metric`;

export { SEARCH_BASE_URL, API_URL, API_KEY };
