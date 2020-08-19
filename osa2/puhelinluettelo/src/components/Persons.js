/** @format */

import React from 'react';
import Person from './Person';

const Persons = (props) =>
  props.persons.map((person) => (
    <Person key={person.name} name={person.name} number={person.number} />
  ));

export default Persons;
