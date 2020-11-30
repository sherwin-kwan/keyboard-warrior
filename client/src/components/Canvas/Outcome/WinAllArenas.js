import React from 'react';

// Only a template, it is currently not possible to reach this page since boss hasn't been created yet
const WinAllArenas = (props) => {

  return (
    <main className="outcome win-battle">
      <p className="message">
        <h1>YOU WON!</h1>
        <p>You beat 5 levels! That means you now enter the arena with the boss. Win this fight and you win the game. Good luck!</p>
        <p>With your victory, you earned {props.lastResult} points. (If this looks higher than you expected, it's because you beat the arena
        so quickly you got bonus points!</p>
        <p>Heading into the final fight, you currently have {props.score} points.</p>
        <button className="primary" onClick={() => {
          props.setMode('BOSS')
          //Set the challenger to the boss
          }}>Fight the boss</button>
      </p>
    </main>
  );
};

export default WinAllArenas;