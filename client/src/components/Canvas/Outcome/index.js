import React, { useEffect } from "react";

// Components
import WinGame from './WinGame';
import WinBattle from './WinBattle';
import LoseBattle from './LoseBattle';
import LoseGameNotBoss from './LoseGameNotBoss';
import LoseGameToBoss from './LoseGameToBoss';
import WinAllArenas from './WinAllArenas';

// Hooks
import useLeaders from '../../../hooks/useLeaders';

// Styles
import './index.scss';

function Outcome(props) {

  const WINGAME = 'WINGAME'; // Player won the whole game
  const LOSEBATTLE = 'LOSEBATTLE'; // Player lost an arena
  const WINBATTLE = 'WINBATTLE'; // Player won the arena
  const LOSEGAMENOTBOSS = "LOSEGAMENOTBOSS" // Player lost the game because they lost too many arenas before they reached a boss
  const LOSEGAMETOBOSS = "LOSEGAMETOBOSS" // Player reached the boss but lost against the boss, thus losing the game
  const WINALLARENAS = "WINALLARENAS" // Player has won 5 arenas and is about to face the boss
  const PENDING = 'PENDING'; // Player has not finished an arena yet
  const outcome = props.outcome;

  // State Hooks
  const { leaders, getLeaders } = useLeaders();

  // Fetch leaders and total score from database on component mount
  useEffect(() => {
    // props.updateScore();
    getLeaders();
  }, []);

  return (
    <>
      {outcome === WINGAME && <WinGame setMode={props.setMode} resetGame={props.resetGame} leaders={leaders} score={props.score} soundMedia={props.soundMedia} />}
      {outcome === LOSEBATTLE && <LoseBattle setMode={props.setMode} soundMedia={props.soundMedia} score={props.score} />}
      {outcome === WINBATTLE && <WinBattle setMode={props.setMode} soundMedia={props.soundMedia} challenger={props.challenger} score={props.score}/>}
      {outcome === LOSEGAMENOTBOSS && <LoseGameNotBoss setMode={props.setMode} soundMedia={props.soundMedia} leaders={leaders} score={props.score} resetGame={props.resetGame}/>}
      {outcome === LOSEGAMETOBOSS && <LoseGameToBoss setMode={props.setMode} soundMedia={props.soundMedia} leaders={leaders} score={props.score} resetGame={props.resetGame}/>}
      {outcome === WINALLARENAS && <WinAllArenas setMode={props.setMode} score={props.score} soundMedia={props.soundMedia} />}
      {outcome === PENDING && <main>Oops, looks like an error occurred. The result state shouldn't be pending!</main>}
    </>
  );
}

export default Outcome;