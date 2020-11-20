// Libraries
import React from "react";

// Components
import PlayerAction from './PlayerAction';

function PlayerActionList(props) {
  const playerActionMaker = props.words.map((word) =>
    <PlayerAction 
    word = {word}
    />
  )
  return (
    <>
      <h1>PlayerActionList</h1>
        <ul>
          {playerActionMaker}
        </ul>
    </>
  )
}

export default PlayerActionList;