import React from 'react';

function Instructions(props) {
  return (
    <main className="Instructions">
      <h1>Instructions</h1>
      <button
        className="primary"
        onClick={() => props.setMode("START")}
      >
        Back
      </button>
    </main>
  );
}

export default Instructions;