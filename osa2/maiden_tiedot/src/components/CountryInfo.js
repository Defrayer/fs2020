/** @format */

import React from 'react';
import Weather from './Weather';

const CountryInfo = (props) => {
  const country = props.country;
  return (
    <div>
      <h2>{country.name}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h3>Languages</h3>
      <ul>
        {country.languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img
        src={country.flag}
        height="120"
        alt={'Flag of ' + country.name}
      ></img>
      <h3>Weather in {country.capital}</h3>
      <Weather city={country.capital} />
    </div>
  );
};

export default CountryInfo;
