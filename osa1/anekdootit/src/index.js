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

  const getMostVotedIx = () => {
    if (votes.length === 0) return undefined;
    let mostVotedIx = 0;
    for (let i = 0; i < votes.length; i++) {
      if (votes[i] > votes[mostVotedIx]) {
        mostVotedIx = i;
      }
    }
    return mostVotedIx;
  };

  const mostVotedIx = getMostVotedIx();
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <p>This anecdote has {votes[selected]} votes.</p>
      <p>
        <button onClick={handleVote}>Vote</button>
        <button onClick={handleNext}>Next anecdote</button>
      </p>
      <h1>Anecdote with most votes</h1>
      <p>
        {votes.every((value) => value === 0)
          ? 'No votes have been cast.'
          : anecdotes[mostVotedIx] + ' (' + votes[mostVotedIx] + ' votes)'}
      </p>
      <p>
        All anecdotes sourced from{' '}
        <a href="https://www.comp.nus.edu.sg/~damithch/pages/SE-quotes.htm">
          https://www.comp.nus.edu.sg/~damithch/pages/SE-quotes.htm
        </a>
      </p>
    </div>
  );
};

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
