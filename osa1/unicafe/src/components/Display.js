/** @format */

import React from 'react';

const Display = (props) => {
  const { text, value } = props;

  return <p>{`${text}: ${value}`}</p>;
};

export default Display;
