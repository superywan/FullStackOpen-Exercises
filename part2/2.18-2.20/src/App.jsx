import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleSearchChange = e => {
    setSearch(e.target.value)
  }
  const handleCountryShow = countryName => {
    setSearch(countryName)
  }

  const filteredCountries = countries.filter(country =>
    country.name.common.toUpperCase().includes(search.toUpperCase())
  )
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
        ) : filteredCountries.length === 1 ? (
          <div>
            <h1>{filteredCountries[0].name.common}</h1>
            <div>capital {filteredCountries[0].capital[0]}</div>
            <div>capital {filteredCountries[0].area}</div>
            <h3>languages:</h3>
            <ul>
              {Object.entries(filteredCountries[0].languages).map(
                ([, value]) => {
                  return <li key={value}>{value}</li>
                }
              )}
            </ul>
            <img
              src={filteredCountries[0].flags.png}
              alt={filteredCountries[0].flags.alt}
            />
          </div>
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
