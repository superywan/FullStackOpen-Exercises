import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState("")
  const [temperature, setTemperature] = useState(undefined)

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const filteredCountries = countries.filter(country =>
    country.name.common.toUpperCase().includes(search.toUpperCase())
  )

  const getWeather = country => {
    axios
      .get(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${country.latlng[0]}&lon=${country.latlng[1]}&units=metric&appid=${API_KEY}`
      )
      .then(response => {
        console.log(response)
        setTemperature(response.data)
      })
  }

  const handleSearchChange = e => {
    setSearch(e.target.value)
    const filtered = countries.filter(country =>
      country.name.common.toUpperCase().includes(e.target.value.toUpperCase())
    )
    if (filtered.length === 1) {
      console.log("hello!")
      getWeather(filtered[0])
    }
  }
  const handleCountryShow = countryName => {
    setSearch(countryName)
    const filtered = countries.filter(country =>
      country.name.common.toUpperCase().includes(countryName.toUpperCase())
    )
    if (filtered.length === 1) {
      console.log("hello!")
      getWeather(filtered[0])
    }
  }

  if (filteredCountries.length === 1) {
    return (
      <div>
        <h1>{filteredCountries[0].name.common}</h1>
        <div>capital {filteredCountries[0].capital[0]}</div>
        <div>area {filteredCountries[0].area}</div>
        <h3>languages:</h3>
        <ul>
          {Object.entries(filteredCountries[0].languages).map(([, value]) => {
            return <li key={value}>{value}</li>
          })}
        </ul>
        <img
          src={filteredCountries[0].flags.png}
          alt={filteredCountries[0].flags.alt}
        />
        {temperature ? (
          <div>
            <h2>Weather in {filteredCountries[0].name.common}</h2>
            <div>temperature {temperature.current.temp} Celcius</div>
            <img
              src={`https://openweathermap.org/img/wn/${temperature.current.weather[0].icon}@2x.png`}
              alt={`temperature ${temperature.current.temp}`}
            />
            <div>wind {temperature.current.wind_speed} m/s</div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    )
  }

  return (
    <div>
      <div>
        find countries{" "}
        <input
          type="text"
          value={search}
          onChange={event => handleSearchChange(event)}
        />
        {filteredCountries.length > 10 ? (
          <div>Too many matches, specify another filter</div>
        ) : (
          filteredCountries.map(country => {
            return (
              <div key={country.name.common}>
                {country.name.common}{" "}
                <button onClick={e => handleCountryShow(country.name.common)}>
                  show
                </button>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default App
