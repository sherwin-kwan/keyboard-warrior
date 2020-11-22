import React from 'react';

const LoseGame = (props) => {
  return (
    <>
      <h1>DEFEAT</h1>
      <p>Too bad, best of luck next time!</p>
      <button onClick={() => props.setMode('START')}>Back to Start</button>
    </>
  );
};
export default LoseGame;