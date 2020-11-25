// Libraries
import React from 'react';
import { Markup } from 'interweave';

function PlayerAction(props) {
  return (
    <li>
      {/* <div className="action-icon">{props.name}</div> */}
      <img src={props.icon} />
      <div className="action-word">
        {props.word}
        {/* <Markup className="action-word" content={props.word} /> */}
      </div>
    </li>
  );
}

export default PlayerAction;