/** @format */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import anecdotes from './data/anecdotes.js';

/**
 * @author Juho Kettunen
 */
const App = (props) => {
  const [selected, setSelected] = useState(0);
  const initialVotes = anecdotes.map((anecdote) => 0);
  const [votes, setVotes] = useState(initialVotes);

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const handleNext = () => {
    while (true) {
      const newSelected = getRandomInt(anecdotes.length);
      if (newSelected !== selected) {
        setSelected(newSelected);
        return;
      }
    }
  };

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <p>This anecdote has {votes[selected]} votes.</p>
      <p>
        <button onClick={handleVote}>Vote</button>
        <button onClick={handleNext}>Next anecdote</button>
      </p>
    </div>
  );
};

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
