export const Country = ({ country, weather }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>capital {country.capital[0]}</div>
      <div>area {country.area}</div>
      <h3>languages:</h3>
      <ul>
        {Object.entries(country.languages).map(([, value]) => {
          return <li key={value}>{value}</li>
        })}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} />
      {weather ? (
        <div>
          <h2>Weather in {country.name.common}</h2>
          <div>temperature {weather.current.temp} Celcius</div>
          <img
            src={`https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`}
            alt={`temperature ${weather.current.temp}`}
          />
          <div>wind {weather.current.wind_speed} m/s</div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}
