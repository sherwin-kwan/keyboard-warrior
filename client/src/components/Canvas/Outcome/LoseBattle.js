import React, { useEffect } from 'react';

const LoseBattle = (props) => {

  useEffect(() => {
    props.soundMedia.current.src = '/sounds/zimmer-cut.mp3';
    return (() => {
      props.soundMedia.current.src = '/sounds/background-music.ogg';
    });
  }, [props.soundMedia]);

  return (
    <main className="outcome lose-game">
      <p className="message">
        <h1>DEFEAT</h1>
        <p>There's no sugercoating this - losing sucks. But the great thing is this is a game, so you can try again!</p>
        <button className="primary" onClick={() => props.setMode('START')}>Try Again</button>
      </p>
    </main>
  );
};
export default LoseBattle;