import React from 'react';

const LoseGame = (props) => {
  return (
    <main className="outcome lose-game">
      <p className="message">
        <h1>DEFEAT</h1>
        <p>There's no sugercoating this - losing sucks. But the great thing is this is a game, so you can try again!</p>
        <button onClick={() => props.setMode('START')}>Try Again</button>
      </p>
    </main>
  );
};
export default LoseGame;