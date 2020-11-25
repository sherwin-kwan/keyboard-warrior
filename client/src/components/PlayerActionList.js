// Libraries
import React, { useRef } from "react";

// Components
import PlayerAction from './PlayerAction';

// Hooks
import useInputMatcher from '../hooks/useInputMatcher';

function PlayerActionList(props) {

  const { handleLetterMatch } = useInputMatcher();
  const { playerInput, playerActions } = props;

  const match = handleLetterMatch(playerInput, playerActions);
  
  // Create a wordDOM with style applied to matched letters
  if (match) {
    const matchedActionIndex = playerActions.findIndex(action => action.word.slice(0, playerInput.length) === playerInput.toLowerCase());
    const action = playerActions[matchedActionIndex];
    action.wordDOM = `<span className="match">${action.word.slice(0, playerInput.length)}</span>${action.word.slice(playerInput.length)}`;
  // Reset style if letters do not match
  } else {
    playerActions.forEach(action => action.wordDOM = action.word);
  }

  const actions = playerActions.map(action => {
    return (
      <PlayerAction
        key={action.name}
        name={action.name}
        icon={action.icon}
        word={action.wordDOM || action.word}
      />
    )
  });

  return (
    <>
      <ul>
        {actions}
      </ul>
    </>
  )
}

export default PlayerActionList;