import React from 'react';

// Only a template, it is currently not possible to reach this page since boss hasn't been created yet
const WinGame = (props) => {
  return (
    <main className="outcome win-game">
      <h1>YOU WON!</h1>
      <p>You beat the game! Look at that score!</p>
      <p>(Leaderboard goes here)</p>
      <button className="primary" onClick={() => {
        props.setMode('START')
        // clear all state
        }}>Back to Start</button>
    </main>
  );
};

export default WinGame;