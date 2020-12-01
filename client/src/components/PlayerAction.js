// Libraries
import React from 'react';
import { Markup } from 'interweave';

function PlayerAction(props) {
  return (
    <li>
<<<<<<< HEAD
      <img src={props.icon} alt={props.name} title={props.name} />
      <div className="action-word">
=======
      <img src={props.icon} alt={props.name} title={'Type this word to ' + props.name} />
      <div className="action-word" data-cy={props.name + "-word"}>
>>>>>>> 4e6eb5229fdb81c534313e96af7ce2c06fa90846
        <Markup className="action-word" content={props.word} />
      </div>
    </li>
  );
}

export default PlayerAction;