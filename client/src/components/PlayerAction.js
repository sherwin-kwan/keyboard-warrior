// Libraries
import React from 'react';
import { Markup } from 'interweave';

function PlayerAction(props) {
  return (
    <li>
      <img src={props.icon} alt={props.name} title={`Type "${props.word.toUpperCase()}" to ${props.name}`} />
      <div className="action-word" data-cy={props.name + "-word"} title={`Type "${props.word.toUpperCase()}" to ${props.name}`}>
        <Markup className="action-word" content={props.word} />
      </div>
    </li>
  );
}

export default PlayerAction;