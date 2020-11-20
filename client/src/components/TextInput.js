// TextInput
import React from "react";

function TextInput(props) {
 

  return (
    <>
      <textarea
        autoFocus
        cols="100"
        rows="5"
        type="text"
        name="input"
        value={props.value} 
        onChange={props.onChange}
      />
    </>
  );
}

export default TextInput;