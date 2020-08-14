/** @format */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';
import Heading from './components/Heading';
import Display from './components/Display';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Palautteen keskiarvo
  const average = (pos, neut, neg) => {
    const divisor = pos + neut + neg;
    return divisor === 0 ? 0 : (pos - neg) / divisor;
  };

  // Montako prosenttia palautteesta on positiivista
  const positive = (pos, neut, neg) => {
    const divisor = pos + neut + neg;
    return divisor === 0 ? 0 : pos / divisor;
  };

  return (
    <div>
      <Heading text="Give feedback" />
      <Button onClick={() => setGood(good + 1)} text="Good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button onClick={() => setBad(bad + 1)} text="Bad" />
      <Heading text="Statistics" />
      <Display text="Good" value={good} />
      <Display text="Neutral" value={neutral} />
      <Display text="Bad" value={bad} />
      <Display text="Average" value={average(good, neutral, bad)} />
      <Display text="Positive" value={positive(good, neutral, bad)} unit="%" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
