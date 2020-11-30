import React from 'react';
import Leaderboard from '../../Leaderboard';

// Only a template, it is currently not possible to reach this page since boss hasn't been created yet
const WinGame = (props) => {

  return (
    <main className="outcome win-game">
      <p className="message">
        <h1>YOU WON!</h1>
        <p>With your victory, you earned {props.lastResult} points.</p>
        <p>You beat the boss and won the game with {props.score} points.</p>
        <Leaderboard leaders={props.leaders} />
        <button className="primary" onClick={() => {
          props.resetGame()
          }}>Back to Start</button>
      </p>
    </main>
  );
};

export default WinGame;