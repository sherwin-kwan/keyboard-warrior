import React from 'react';

function Transition(props) {

  const winningArray = ['WINGAME', 'WINBATTLE', 'WINALLARENAS'];

  return (
    <main className="transition">
      <h1>{winningArray.includes(props.outcome) ? 'YOU WON' : 'YOU LOST'}</h1>
    </main>
  );
}

export default Transition;