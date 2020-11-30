import React from 'react';
import "./Transition.scss";

function Transition(props) {

  const winningArray = ['WINGAME', 'WINBATTLE', 'WINALLARENAS'];

  return (
    <main className="transition">
      <img src="/images/status.png" alt="Loading" />
    </main>
  );
}

export default Transition;