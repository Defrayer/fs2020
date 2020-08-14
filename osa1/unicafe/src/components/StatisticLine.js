/** @format */

import React from 'react';

const StatisticLine = (props) => {
  const { text, value, unit } = props;

  return (
    <p>
      {text}: {value} {unit || ''}
    </p>
  );
};

export default StatisticLine;
