import React from 'react';
import Leaderboard from '../../Leaderboard';

// Only a template, it is currently not possible to reach this page since boss hasn't been created yet
const WinGame = (props) => {

  return (
    <main className="outcome win-game">
      <div className="message">
        <h1>YOU WON! CONGRATS!</h1>
        <p>With your victory over the boss, you earned {props.lastResult} points.</p>
        <p>Your final score is {props.score} points. If it's high enough, you'll see it in the leaderboard below!</p>
        <button className="primary" onClick={() => {
          props.resetGame()
        }}>Back to Start</button>
        <Leaderboard leaders={props.leaders} />
      </div>
    </main>
  );
};

export default WinGame;