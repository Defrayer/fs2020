/** @format */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import CountryList from './components/CountryList';
import CountryInfo from './components/CountryInfo';

/**
 * @author Juho Kettunen jupekett
 */
function App() {
  const [countries, setCountries] = useState([]);
  const [filterWith, setFilterWith] = useState('');
  const [countriesToShow, setCountriesToShow] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://restcountries.eu/rest/v2/all?fields=name;capital;population;languages;flag'
      )
      .then((response) => setCountries(response.data));
  }, []);

  const escapeParens = (str) => {
    const strParen1 = str.replace(/\(/g, '\\(');
    const strClean = strParen1.replace(/\)/g, '\\)');
    return strClean;
  };

  const findCountries = (name, countries) => {
    const nameClean = escapeParens(name);
    return name.trim()
      ? countries.filter((country) =>
          RegExp(`.*${nameClean}.*`, 'i').test(country.name)
        )
      : countries;
  };

  const findExactCountry = (name, countries) => {
    const nameClean = escapeParens(name);
    return name.trim()
      ? countries.filter((country) =>
          RegExp(`^${nameClean}$`, 'i').test(country.name)
        )
      : countries;
  };

  const handleFilterChange = (event) => {
    const filter = event.target.value;
    setFilterWith(filter);
    const countriesToShow = findCountries(filter, countries);
    setCountriesToShow(countriesToShow);
  };

  const handleClick = (event, name) => {
    const country = findExactCountry(name, countries);
    setCountriesToShow(country);
  };

  const giveElementToShow = () => {
    if (10 < countriesToShow.length) {
      return <p>Too many results, use another filter</p>;
    } else if (countriesToShow.length === 1) {
      return <CountryInfo country={countriesToShow[0]} />;
    } else {
      return (
        <CountryList countries={countriesToShow} handleClick={handleClick} />
      );
    }
  };

  return (
    <div>
      <h1>Country info finder</h1>
      <Filter
        text="Find countries "
        filterWith={filterWith}
        handleChange={handleFilterChange}
      />
      {giveElementToShow()}
    </div>
  );
}

export default App;
