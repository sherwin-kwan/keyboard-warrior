import React from 'react';

// Only a template, it is currently not possible to reach this page since boss hasn't been created yet
const WinGame = (props) => {
  return (
    <main className="outcome win-game">
      <h1>YOU WON!</h1>
      <p>You beat the game! Enter your high score here:</p>
      <p>(Leaderboard goes here)</p>
      <button onClick={() => props.setMode('START')}>Back to Start</button>
    </main>
  );
};

export default WinGame;