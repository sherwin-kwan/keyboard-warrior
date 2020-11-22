import React from 'react';

const WinBattle = (props) => {
  return (
    <>
      <h1>VICTORY</h1>
      <p>Congrats, you won the fight!</p>
      <button onClick={() => props.setMode('MAP')}>Choose Next Battle</button>
    </>
  );
};
export default WinBattle;