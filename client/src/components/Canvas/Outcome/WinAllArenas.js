import React from 'react';

// Only a template, it is currently not possible to reach this page since boss hasn't been created yet
const WinAllArenas = (props) => {

  useEffect(() => {
    props.soundMedia.current.src = '/sounds/win-battle.mp3';
    return (() => {
      props.soundMedia.current.src = '/sounds/background-music.ogg';
    });
  }, [props.soundMedia]);

  return (
    <main className="outcome win-battle">
      <h1>YOU WON!</h1>
      <p>You beat 5 levels! That means you now enter the arena with the boss. Win this fight and you win the game. Good luck!</p>
      <button className="primary" onClick={() => {
        props.setMode('ARENA')
        //Set the challenger to the boss
        }}>Fight the boss</button>
    </main>
  );
};

export default WinAllArenas;