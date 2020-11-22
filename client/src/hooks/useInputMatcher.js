import { useState } from "react";

export default function useInputMatcher() {

  // const [ isLetterMatch, setIsLetterMatch ] = useState(false);
  // const [ isWordMatch, setIsWordMatch ] = useState(false);

  // Check for letter matches and returns true if a match is found
  // playerInput: "word"
  // playerActions: [{ name: "attack", word: "word"}, { name: "heal", word: "girl" }]
  const handleLetterMatch = (playerInput, playerActions) => {
    const actionWordSlices = playerActions.map(action => action.word.slice(0, playerInput.length) || '');
    return (actionWordSlices.includes(playerInput)) ? true : false;
  }

  // Check for word matches and returns the action name if a match is found
  const handleWordMatch = (playerInput, playerActions) => {
    return playerActions.find(action => action.word === playerInput);
  }

  return {
    handleWordMatch,
    handleLetterMatch
  }
}
