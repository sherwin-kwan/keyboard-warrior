// TextInput
import React, { useState } from "react";

function TextInput(props) {
  const [input, setInput] = useState('');

  return (
    <>
      <textarea
        autoFocus
        cols="100"
        rows="5"
        type="text"
        name="input"
        value={input} 
        onChange={e => setInput(e.target.value)}
      />
    </>
  );
}

export default TextInput;