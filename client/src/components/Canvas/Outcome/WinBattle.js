import React from 'react';

const WinBattle = (props) => {
  return (
    <main className="outcome win-battle">
      <p className="message">
        <h1>VICTORY</h1>
        <p>Congrats, you have triumphed over &lt;Sorry the props didn't give me a name&gt;!</p>
        <button onClick={() => props.setMode('MAP')}>Choose Next Battle</button>
      </p>
    </main>
  );
};
export default WinBattle;