/** @format */

import React from 'react';

const Filter = (props) => (
  <div>
    <label htmlFor="filterField">Filter shown with </label>
    <input
      id="filterField"
      type="text"
      value={props.filterWith}
      onChange={props.handleChange}
    ></input>
  </div>
);

export default Filter;
