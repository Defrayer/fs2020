/** @format */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import anecdotes from './data/anecdotes.js';

/**
 * @author Juho Kettunen
 */
const App = (props) => {
  const [selected, setSelected] = useState(0);

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const handleClick = () => {
    while (true) {
      const newSelected = getRandomInt(anecdotes.length);
      if (newSelected !== selected) {
        setSelected(newSelected);
        return;
      }
    }
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <p>
        <button onClick={handleClick}>Next anecdote</button>
      </p>
    </div>
  );
};

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
