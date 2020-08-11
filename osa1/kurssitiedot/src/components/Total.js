/** @format */

import React from 'react';

const Total = (props) => (
  <p>
    Number of exercises{' '}
    {props.exercises.reduce((yhteensa, kpl) => yhteensa + kpl)}
  </p>
);

export default Total;
