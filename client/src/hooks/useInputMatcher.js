export default function useInputMatcher() {

  // playerInput: "word"
  // playerActions: [{ name: "attack", word: "word"}, { name: "heal", word: "girl" }]

  // Check for letter matches and returns true if a match is found. 
  // Note: This function has been changed (Sherwin note 2020-11-25)
  // Now it returns the index of the matched action (0 = attack, 1 = heal) or else returns -1 if no match is found
  const handleLetterMatch = (playerInput, playerActions) => {
    if (playerInput.length > 0) {
      const actionWordSlices = playerActions.map(action => action.word.slice(0, playerInput.length));
      return actionWordSlices.indexOf(playerInput.toLowerCase());
    }
    return -1;
  }

  // Check for word matches and returns the action name if a match is found
  const handleWordMatch = (playerInput, playerActions) => {
    return playerActions.find(action => action.word === playerInput.toLowerCase());
  }

  return {
    handleWordMatch,
    handleLetterMatch
  }
}
