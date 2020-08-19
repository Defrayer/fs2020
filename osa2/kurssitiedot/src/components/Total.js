/** @format */

import React from 'react';

const Total = (props) => (
  <p style={{ fontWeight: 600 }}>
    Total of {props.parts.reduce((total, part) => total + part.exercises, 0)}{' '}
    exercises.
  </p>
);

export default Total;
