/** @format */

import React from 'react';

const Display = (props) => {
  const { text, value, unit } = props;

  return <p>{`${text}: ${value} ${unit || ''}`}</p>;
};

export default Display;
