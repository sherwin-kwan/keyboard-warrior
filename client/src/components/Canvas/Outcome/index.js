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
  const outcome = props.outcome;

  return (
    <>
      {outcome === WINGAME && <WinGame setMode={props.setMode}/>}
      {outcome === LOSEGAME && <LoseGame setMode={props.setMode} soundMedia={props.soundMedia} />}
      {outcome === WINBATTLE && <WinBattle setMode={props.setMode} soundMedia={props.soundMedia} />}
      {outcome === PENDING && <main>Oops, looks like an error occurred. The result state cshouldn't be pending!</main>}
    </>
  );
}

export default Outcome;