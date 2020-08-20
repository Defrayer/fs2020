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

  useEffect(() => {
    axios
      .get(
        'https://restcountries.eu/rest/v2/all?fields=name;capital;population;languages;flag'
      )
      .then((response) => setCountries(response.data));
  }, []);

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilterWith(value);
  };

  const countriesToShow = filterWith
    ? countries.filter((country) =>
        RegExp('.*' + filterWith + '.*', 'i').test(country.name)
      )
    : countries;

  const giveElementToShow = () => {
    if (10 < countriesToShow.length) {
      return <p>Too many results, use another filter</p>;
    } else if (countriesToShow.length === 1) {
      return <CountryInfo country={countriesToShow[0]} />;
    } else {
      return <CountryList countries={countriesToShow} />;
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
