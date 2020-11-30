// Libraries
import React from 'react';
import { Markup } from 'interweave';

function PlayerAction(props) {
  return (
    <li>
      <img src={props.icon} alt={props.name} title={props.name} />
      <div className="action-word">
        <Markup className="action-word" content={props.word} />
      </div>
    </li>
  );
}

export default PlayerAction;