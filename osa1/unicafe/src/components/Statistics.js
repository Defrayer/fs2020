/** @format */

import React from 'react';
import Heading from './Heading';
import Display from './Display';

const Statistics = (props) => {
  const { good, neutral, bad } = props;

  // Palautteen keskiarvo
  const average = (pos, neut, neg) => {
    const divisor = pos + neut + neg;
    return divisor === 0 ? 0 : (pos - neg) / divisor;
  };

  // Montako prosenttia palautteesta on positiivista
  const positive = (pos, neut, neg) => {
    const divisor = pos + neut + neg;
    return divisor === 0 ? 0 : (pos * 100) / divisor;
  };

  return (
    <div>
      <Heading text="Statistics" />
      <Display text="Good" value={good} />
      <Display text="Neutral" value={neutral} />
      <Display text="Bad" value={bad} />
      <Display text="Average" value={average(good, neutral, bad)} />
      <Display text="Positive" value={positive(good, neutral, bad)} unit="%" />
    </div>
  );
};

export default Statistics;
