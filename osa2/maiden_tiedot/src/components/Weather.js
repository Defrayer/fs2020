/** @format */

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = (props) => {
  const [weather, setWeather] = useState({});

  const city = props.city;
  const apiKey = process.env.REACT_APP_WEATHER_KEY;

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}&units=m`
      )
      .then((response) => setWeather(response.data))
      .catch((error) => console.log(error));
  }, [apiKey, city]);

  return weather.current ? (
    <div>
      <p>
        <b>Temperature: </b>
        {weather.current.temperature} Celsius, feels like{' '}
        {weather.current.feelslike} Celsius
      </p>
      <img
        src={weather.current.weather_icons[0]}
        alt={weather.current.weather_descriptions[0]}
      />
      <p>
        <b>Wind: </b>
        {weather.current.wind_speed} km/h, direction: {weather.current.wind_dir}
      </p>
    </div>
  ) : (
    <p>Failed to get weather data.</p>
  );
};

export default Weather;
