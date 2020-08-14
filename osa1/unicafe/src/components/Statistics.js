/** @format */

import React from 'react';
import StatisticLine from './StatisticLine';

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
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="Average" value={average(good, neutral, bad)} />
      <StatisticLine
        text="Positive"
        value={positive(good, neutral, bad)}
        unit="%"
      />
    </div>
  );
};

export default Statistics;
