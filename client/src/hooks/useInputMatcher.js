export default function useInputMatcher() {

  // playerInput: "word"
  // playerActions: [{ name: "attack", word: "word"}, { name: "heal", word: "girl" }]

  // Check for letter matches and returns true if a match is found
  const handleLetterMatch = (playerInput, playerActions) => {
    if (playerInput.length > 0 && playerActions.length > 0) {
      const actionWordSlices = playerActions.map(action => action.word.slice(0, playerInput.length));
      return (actionWordSlices.includes(playerInput)) ? true : false;
    }
    return false;
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
