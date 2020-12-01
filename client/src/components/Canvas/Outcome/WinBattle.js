import React from 'react';

const WinBattle = (props) => {
  
  return (
    <main className="outcome win-battle">
      <p className="message">
        <h1>VICTORY</h1>
        <p>Congrats, you have triumphed over {props.challenger}!</p>
        <p>With your victory, you earned {props.lastResult} points. (If this looks higher than you expected, it's because you beat the arena
        so quickly you got bonus points!</p>
        <p>You now have a total of {props.score} points.</p>
        <button className="primary" onClick={() => props.setMode('MAP')}>Choose Next Battle</button>
      </p>
    </main>
  );
};
export default WinBattle;