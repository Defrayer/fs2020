/** @format */

import React from 'react';

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const all = good + neutral + bad;

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
    <table>
      <tbody>
        <tr>
          <td>Good</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>Neutral</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>Bad</td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td>All</td>
          <td>{all}</td>
        </tr>
        <tr>
          <td>Average</td>
          <td>{average(good, neutral, bad)}</td>
        </tr>
        <tr>
          <td>Positive</td>
          <td>{positive(good, neutral, bad)} %</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Statistics;
