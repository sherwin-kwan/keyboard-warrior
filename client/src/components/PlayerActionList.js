// Libraries
import React from "react";

// Components
import PlayerAction from './PlayerAction';

function PlayerActionList(props) {
  // console.log('playeractions', props.playerActions);

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
    <>
      <h1>PlayerActionList</h1>
        <ul>
          {actions}
        </ul>
    </>
  )
}

export default PlayerActionList;