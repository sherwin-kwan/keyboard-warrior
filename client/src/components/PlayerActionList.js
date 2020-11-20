// Libraries
import React from "react";

// Components
import PlayerAction from './PlayerAction';

function PlayerActionList(props) {
  const words = props.words;
  const getRandWord = () => words[Math.floor(Math.random() * words.length)];

  const actions = props.playerActions.map(action => {
    return (
      <PlayerAction
        name={action.name}
        word={getRandWord()}
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