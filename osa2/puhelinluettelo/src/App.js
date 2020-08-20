/** @format */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

/**
 * @author Juho Kettunen jupekett
 */
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterWith, setFilterWith] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then((response) => setPersons(response.data));
  }, []);

  // Note: case insensitive filtering
  const personsToShow = filterWith
    ? persons.filter((person) =>
        RegExp('.*' + filterWith + '.*', 'i').test(person.name)
      )
    : persons;

  const handleFilterChange = (event) => {
    setFilterWith(event.target.value);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

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
      <Filter filterWith={filterWith} handleChange={handleFilterChange} />
      <h2>Add a new person</h2>
      <PersonForm
        name={newName}
        number={newNumber}
        handleSubmit={handleSubmit}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  );
};

export default App;
