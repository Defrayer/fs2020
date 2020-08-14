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
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
