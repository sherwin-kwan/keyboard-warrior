// TextInput
import React from "react";

function TextInput(props) {

  return (
    <>
      <input
        autoFocus
        type="text"
        name="input"
        placeholder="Type words above to attack or heal!"
        value={props.value} 
        onChange={e => props.onChange(e.target.value)}
      />
    </>
  );
}

export default TextInput;