/** @format */

import React from 'react';

const CountryList = (props) => {
  const giveClickHandler = (name) => {
    return (event) => props.handleClick(event, name);
  };

  return (
    <div>
      {props.countries.map((country) => (
        <p key={country.name}>
          {country.name}
          <button onClick={giveClickHandler(country.name)}>Show</button>
        </p>
      ))}
    </div>
  );
};

export default CountryList;
