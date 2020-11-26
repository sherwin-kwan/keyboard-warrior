import React from 'react';

function Credits(props) {
  return (
    <main className="credits">
      <h1>Credits</h1>
      <button
        className="primary"
        onClick={() => props.setMode("START")}
      >
        Back
      </button>
    </main>
  );
}

export default Credits;