import React from "react";

// Components
import WinGame from './WinGame';
import WinBattle from './WinBattle';
import LoseGame from './LoseGame';

function Outcome(props) {

  const WINGAME = 'WINGAME';
  const LOSEGAME = 'LOSEGAME';
  const WINBATTLE = 'WINBATTLE';
  const PENDING = 'PENDING';
  const result = props.result;

  return (
    <main class="outcome">
      <h1>Outcome</h1>
      {result === WINGAME && <WinGame setMode={props.setMode}/>}
      {result === LOSEGAME && <LoseGame setMode={props.setMode}/>}
      {result === WINBATTLE && <WinBattle setMode={props.setMode}/>}
      {result === PENDING && <p>Oops, looks like an error occurred. The result state cshouldn't be pending!</p>}
    </main>
  );
}

export default Outcome;