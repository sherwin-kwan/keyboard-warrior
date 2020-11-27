import React, { useEffect } from 'react';

const LoseBattle = (props) => {

  useEffect(() => {
    props.soundMedia.current.src = '/sounds/lose-battle.mp3';
    return (() => {
      props.soundMedia.current.src = '/sounds/background-music.ogg';
    });
  }, [props.soundMedia]);

  return (
    <main className="outcome lose-battle">
      <p className="message">
        <h1>DEFEAT</h1>
        <p>There's no sugercoating this - losing sucks. But the great thing is this, you still some more chances!</p>
        <button className="primary" onClick={() => props.setMode('MAP')}>Choose next battle</button>
      </p>
    </main>
  );
};
export default LoseBattle;