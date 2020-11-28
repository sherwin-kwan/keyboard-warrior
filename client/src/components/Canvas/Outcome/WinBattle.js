import React, { useEffect } from 'react';

const WinBattle = (props) => {
  
  useEffect(() => {
    props.soundMedia.current.src = '/sounds/win-battle.mp3';
    return (() => {
      props.soundMedia.current.src = '/sounds/background-music.ogg';
    });
  }, [props.soundMedia]);

  return (
    <main className="outcome win-battle">
      <p className="message">
        <h1>VICTORY</h1>
        <p>Congrats, you have triumphed over {props.challenger}!</p>
        <p>With your victory, you earned {props.score} points.</p>
        <button className="primary" onClick={() => props.setMode('MAP')}>Choose Next Battle</button>
      </p>
    </main>
  );
};
export default WinBattle;