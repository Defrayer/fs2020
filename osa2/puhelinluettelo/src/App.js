/** @format */

import React, { useState } from 'react';

/**
 * @author Juho Kettunen jupekett
 */
const App = () => {
  const [persons, setPersons] = useState([{ name: 'Erkki Esimerkki' }]);
  const [newName, setNewName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setPersons(persons.concat({ name: newName }));
    setNewName('');
  };

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name}>{person.name}</p>
      ))}
    </div>
  );
};

export default App;
