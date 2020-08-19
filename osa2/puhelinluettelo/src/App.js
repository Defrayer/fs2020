/** @format */

import React, { useState } from 'react';

/**
 * @author Juho Kettunen jupekett
 */
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Erkki Esimerkki', number: '123-4567890' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterWith, setFilterWith] = useState('');

  // Case insensitive filtering
  const personsToShow = filterWith
    ? persons.filter((person) =>
        RegExp('.*' + filterWith + '.*', 'i').test(person.name)
      )
    : persons;

  // Adds a person to the phonebook. Doesn't allow blank fields or
  // a duplicate name.
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newName.trim()) {
      alert('Name cannot be blank.');
      setNewName('');
      return;
    }
    if (!newNumber.trim()) {
      alert('Number cannot be blank.');
      setNewNumber('');
      return;
    }
    const nameIsInPhonebook = persons.some(
      (person) =>
        person.name.trim().toLowerCase() === newName.trim().toLowerCase()
    );
    if (nameIsInPhonebook) {
      alert(`${newName} is already added to the phonebook.`);
    } else {
      const newPerson = { name: newName.trim(), number: newNumber.trim() };
      setPersons(persons.concat(newPerson));
      setNewName('');
      setNewNumber('');
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <label htmlFor="filterField">Filter shown with </label>
      <input
        id="filterField"
        type="text"
        value={filterWith}
        onChange={(e) => setFilterWith(e.target.value)}
      ></input>
      <h2>Add a new person</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nameField">Name: </label>
          <input
            id="nameField"
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="numberField">Number: </label>
          <input
            id="numberField"
            type="tel"
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add</button>
      </form>
      <h2>Numbers</h2>
      {personsToShow.map((person) => (
        <p key={person.name}>{person.name + ' ' + person.number}</p>
      ))}
    </div>
  );
};

export default App;
