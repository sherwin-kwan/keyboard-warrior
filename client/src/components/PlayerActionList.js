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

  // console.log(props.playerInput, props.playerActions)
  const match = handleLetterMatch(props.playerInput, props.playerActions); // returns true or false
  const matchedAction = props.playerActions.find(action => action.word.slice(0, props.playerInput.length) === props.playerInput)

  if (match) {
    console.log('match', matchedAction)
    props.playerActions.forEach(action => {
      if (action === matchedAction) action.wordDOM = `<span class="match">${action.word}</span>`;
    });
  } else {
    props.playerActions.forEach(action => action.wordDOM = action.word);
  }

  const actions = props.playerActions.map(action => {
    console.log('wordDOM:', action.wordDOM)
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