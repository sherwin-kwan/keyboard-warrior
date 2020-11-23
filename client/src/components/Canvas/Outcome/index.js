import React from "react";

// Components
import WinGame from './WinGame';
import WinBattle from './WinBattle';
import LoseGame from './LoseGame';
// Styles
import './index.scss';

function Outcome(props) {

  const WINGAME = 'WINGAME';
  const LOSEGAME = 'LOSEGAME';
  const WINBATTLE = 'WINBATTLE';
  const PENDING = 'PENDING';
  const result = props.result;

  return (
    <>
      {result === WINGAME && <WinGame setMode={props.setMode}/>}
      {result === LOSEGAME && <LoseGame setMode={props.setMode}/>}
      {result === WINBATTLE && <WinBattle setMode={props.setMode} soundMedia={props.soundMedia} />}
      {result === PENDING && <main>Oops, looks like an error occurred. The result state cshouldn't be pending!</main>}
    </>
  );
}

export default Outcome;