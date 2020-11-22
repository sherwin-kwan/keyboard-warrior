// Libraries
import React from "react";

// Components
import PlayerAction from './PlayerAction';

// Hooks
import useInputMatcher from '../hooks/useInputMatcher';

// Styles
import './PlayerActionList.scss';

function PlayerActionList(props) {

  const { handleLetterMatch } = useInputMatcher();
  const match = handleLetterMatch(props.playerInput, props.playerActions);

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