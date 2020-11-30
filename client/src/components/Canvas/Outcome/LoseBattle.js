import React, { useEffect } from 'react';

const LoseBattle = (props) => {


  return (
    <main className="outcome lose-battle">
      <p className="message">
        <h1>DEFEAT</h1>
        <p>There's no sugercoating this - losing sucks. But the great thing is this, you still have some more chances!</p>
        <p>You remain at {props.score} points.</p>
        <button className="primary" onClick={() => props.setMode('MAP')}>Choose next battle</button>
      </p>
    </main>
  );
};
export default LoseBattle;