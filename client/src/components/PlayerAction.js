// Libraries
import React from 'react';
import { Markup } from 'interweave';

function PlayerAction(props) {
  return (
    <li>
      <div>{props.name}</div>
      <Markup content={props.word} />
      {/* <div>{props.word}</div> */}
    </li>
  );
}

export default PlayerAction;