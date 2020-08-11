/** @format */

import React from 'react';
import Part from './Part';

const Content = (props) => {
  return (
    <div>
      <Part name={props.parts[0].name} number={props.parts[0].number} />
      <Part name={props.parts[1].name} number={props.parts[1].number} />
      <Part name={props.parts[2].name} number={props.parts[2].number} />
    </div>
  );
};

/*const Content = (props) =>
  props.parts.map((osa, i) => (
    <p key={i}>
      {osa.name} {osa.number}
    </p>
  ));*/

export default Content;
