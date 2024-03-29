import { useEffect, useState } from "react"

import countryService from "./services/country"
import weatherService from "./services/weather"
import { Country } from "./components/Country"
import { Search } from "./components/Search"

function App() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState("")
  const [weather, setWeather] = useState(undefined)

  useEffect(() => {
    countryService.getAll().then(list => setCountries(list))
  }, [])

  const handleSearchChange = context => {
    setSearch(context)
    const countryWithContext = countries.filter(country =>
      country.name.common.toUpperCase().includes(context.toUpperCase())
    )
    if (countryWithContext.length === 1) {
      weatherService
        .getWeatherBylanlng(countryWithContext[0])
        .then(temp => setWeather(temp))
    }
  }

  const filteredCountries = countries.filter(country =>
    country.name.common.toUpperCase().includes(search.toUpperCase())
  )

  if (filteredCountries.length === 1) {
    return (
      <div>
        <Search search={search} handleSearchChange={handleSearchChange} />
        <Country country={filteredCountries[0]} weather={weather} />
      </div>
    )
  }

  return (
    <div>
      <Search search={search} handleSearchChange={handleSearchChange} />
      {filteredCountries.length > 10 ? (
        <div>Too many matches, specify another filter</div>
      ) : (
        filteredCountries.map(country => {
          return (
            <div key={country.name.common}>
              {country.name.common}{" "}
              <button onClick={e => handleSearchChange(country.name.common)}>
                show
              </button>
            </div>
          )
        })
      )}
    </div>
  )
}

export default App
