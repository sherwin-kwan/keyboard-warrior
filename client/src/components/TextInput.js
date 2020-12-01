// TextInput
import React from "react";

function TextInput(props) {

  return (
    <>
      <input
        autoFocus
        type="text"
        name="input"
        placeholder="Start typing!"
        value={props.value} 
        onChange={e => props.onChange(e.target.value)}
      />
    </>
  );
}

export default TextInput;