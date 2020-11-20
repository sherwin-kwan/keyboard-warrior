// TextInput
import React, { useState } from "react";

function TextInput() {
  const [input, setInput] = useState('');

  return (
    <>
      <textarea
        autofocus
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