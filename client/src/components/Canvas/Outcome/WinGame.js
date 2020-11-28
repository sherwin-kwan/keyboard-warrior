import React, { useEffect } from 'react';
import Leaderboard from '../../Leaderboard';

// Only a template, it is currently not possible to reach this page since boss hasn't been created yet
const WinGame = (props) => {

  useEffect(() => {
    props.soundMedia.current.src = '/sounds/win-game.mp3';
    return (() => {
      props.soundMedia.current.src = '/sounds/background-music.ogg';
    });
  }, [props.soundMedia]);

  return (
    <main className="outcome win-game">
      <p className="message">
        <h1>YOU WON!</h1>
        <p>You beat the boss and won the game! You now have a position on the game leaderboard.</p>
        <Leaderboard />
        <button className="primary" onClick={() => {
          props.resetGame()
          }}>Back to Start</button>
      </p>
    </main>
  );
};

export default WinGame;