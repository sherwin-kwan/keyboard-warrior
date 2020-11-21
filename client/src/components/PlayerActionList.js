// Libraries
import React from "react";

// Style
import '../styles/PlayerActionList.scss';

// Components
import PlayerAction from './PlayerAction';

function PlayerActionList(props) {

  const actions = props.playerActions.map(action => {
    return (
      <PlayerAction
        key={action.name}
        name={action.name}
        word={action.word}
      />
    )
  });
    
  return (
    <div class="action-list">
      <h1>PlayerActionList</h1>
        <ul>
          {actions}
        </ul>
    </div>
  )
}

export default PlayerActionList;