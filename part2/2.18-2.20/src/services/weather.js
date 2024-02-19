import axios from "axios"

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

const getWeatherBylanlng = country => {
  const request = axios.get(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${country.latlng[0]}&lon=${country.latlng[1]}&units=metric&appid=${API_KEY}`
  )
  return request.then(response => response.data)
}

export default { getWeatherBylanlng }
