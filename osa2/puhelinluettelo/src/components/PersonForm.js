/** @format */

import React from 'react';

const PersonForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <div>
      <label htmlFor="nameField">Name: </label>
      <input
        id="nameField"
        type="text"
        value={props.name}
        onChange={props.handleNameChange}
        required
      />
    </div>
    <div>
      <label htmlFor="numberField">Number: </label>
      <input
        id="numberField"
        type="tel"
        value={props.number}
        onChange={props.handleNumberChange}
        required
      />
    </div>
    <button type="submit">Add</button>
  </form>
);

export default PersonForm;
