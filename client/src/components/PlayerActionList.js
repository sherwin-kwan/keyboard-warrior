// Libraries
import React, { useRef } from "react";

// Components
import PlayerAction from './PlayerAction';

// Hooks
import useInputMatcher from '../hooks/useInputMatcher';

// Styles
import './PlayerActionList.scss';

function PlayerActionList(props) {

  const { handleLetterMatch } = useInputMatcher();
  const { playerInput, playerActions } = props;

  const match = handleLetterMatch(playerInput, playerActions);
  const matchedAction = playerActions.find(action => action.word.slice(0, playerInput.length) === playerInput)

  // Create a wordDOM with style applied to matched letters
  if (match) {
    playerActions.forEach(action => {
      if (action === matchedAction) {
        action.wordDOM = `<span class="match">${action.word.slice(0, playerInput.length)}</span>${action.word.slice(playerInput.length)}`;
      }
    });
  // Reset style if letters do not match
  } else {
    playerActions.forEach(action => action.wordDOM = action.word);
  }

  const actions = playerActions.map(action => {
    return (
      <PlayerAction
        key={action.name}
        name={action.name}
        word={action.wordDOM || action.word}
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