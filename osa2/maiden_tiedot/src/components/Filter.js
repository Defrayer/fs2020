/** @format */

import React from 'react';

const Filter = (props) => (
  <div>
    <label htmlFor="filterField">{props.text}</label>
    <input
      id="filterField"
      type="text"
      value={props.filterWith}
      onChange={props.handleChange}
    ></input>
  </div>
);

export default Filter;
