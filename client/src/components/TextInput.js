// TextInput
import React, { useState } from "react";

function TextInput(props) {
  // State
  // const [input, setInput] = useState('');

  // Helper function
  // const isMatch = (input, actions) => actions.find(action => action.word === input);

  // // props: playerActions, getNewWorld(action)
  // // Check if input matches any action words
  // if (isMatch(input, props.playerActions)) {
  //   console.log('match found!');
  //   const action = props.playerActions.filter(action => action.word === input);
  //   // Get a new word for that action
  //   console.log('matched action', action)
  //   props.onMatch(action)
  //   // Clear text area
  //   // setInput('');
  // } 

  return (
    <>
      <input
        autoFocus
        cols="100"
        rows="5"
        type="text"
        name="input"
        value={props.value} 
        onChange={e => props.onChange(e.target.value)}
      />
    </>
  );
}

export default TextInput;