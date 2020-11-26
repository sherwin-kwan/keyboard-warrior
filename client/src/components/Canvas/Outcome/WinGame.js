import React, { useEffect } from 'react';

// Only a template, it is currently not possible to reach this page since boss hasn't been created yet
const WinGame = (props) => {

  // useEffect(() => {
  //   props.soundMedia.current.src = '/sounds/win-game.mp3';
  //   return (() => {
  //     props.soundMedia.current.src = '/sounds/background-music.ogg';
  //   });
  // }, [props.soundMedia]);

  return (
    <main className="outcome win-game">
      <h1>YOU WON!</h1>
      <p>You beat the boss and won the game! Look at that score!</p>
      <p>(Leaderboard goes here)</p>
      <button className="primary" onClick={() => {
        props.resetGame()
        }}>Back to Start</button>
    </main>
  );
};

export default WinGame;