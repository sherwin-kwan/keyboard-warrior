import React, { useEffect } from 'react';

const LoseGameToBoss = (props) => {

  useEffect(() => {
    props.soundMedia.current.src = '/sounds/lose-game.mp3';
    return (() => {
      props.soundMedia.current.src = '/sounds/background-music.ogg';
    });
  }, [props.soundMedia]);

  return (
    <main className="outcome lose-game">
      <p className="message">
        <h1>DEFEAT</h1>
        <p>You put up a valiant fight, but the boss was too much for you. Too bad. You can try again though!</p>
        <button className="primary" onClick={() => {
          props.resetGame()
          }
          }>Back to start</button>
      </p>
    </main>
  );
};
export default LoseGameToBoss;