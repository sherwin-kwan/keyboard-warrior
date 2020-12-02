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

  // Destructuring props
  const { soundMedia, updateScore } = props;

  useEffect(() => {
    updateScore();
    getLeaders();
  }, []);

  // Set music for win and lose conditions
  useEffect(() => {
    switch (outcome) {
      case WINGAME:
        soundMedia.current.src = '/sounds/win-game.mp3';
        break;
      case WINBATTLE:
      case WINALLARENAS:
        soundMedia.current.src = '/sounds/win-battle.mp3';
        break;
      case LOSEBATTLE:
        soundMedia.current.src = '/sounds/lose-battle.mp3';
        break;
      case LOSEGAMENOTBOSS:
      case LOSEGAMETOBOSS:
        soundMedia.current.src = '/sounds/lose-game.mp3';
        break;
      default:
        soundMedia.current.src = '/sounds/background-music.ogg';
    };
    soundMedia.current.loop = false;
    // Cleanup function: return to normally scheduled programming after leaving the outcome screen
    return (() => {
      soundMedia.current.src = '/sounds/background-music.ogg';
      soundMedia.current.loop = true;
    });
  }, [soundMedia, outcome]);


  // For calculation purposes
  const resultProps = {
    par_time: props.arena.Difficulty.par_time,
    player_time: props.currentBattle.time_seconds,
    speedBonus: Math.max(1, par_time / player_time),
    baseScore: props.arena.points,
    lastResult: props.currentBattle.score
  }

  return (
    <>
      {outcome === WINGAME && <WinGame setMode={props.setMode} resetGame={props.resetGame} leaders={leaders} score={props.score} lastResult={props.lastResult} soundMedia={props.soundMedia} />}
      {outcome === LOSEBATTLE && <LoseBattle setMode={props.setMode} soundMedia={props.soundMedia} lastResult={props.lastResult} score={props.score} />}
      {outcome === WINBATTLE && <WinBattle setMode={props.setMode} soundMedia={props.soundMedia} currentBatttle={props.currentBattle} arena={props.arena} lastResult={props.lastResult} score={props.score} />}
      {outcome === LOSEGAMENOTBOSS && <LoseGameNotBoss setMode={props.setMode} soundMedia={props.soundMedia} leaders={leaders} lastResult={props.lastResult} score={props.score} resetGame={props.resetGame} />}
      {outcome === LOSEGAMETOBOSS && <LoseGameToBoss setMode={props.setMode} soundMedia={props.soundMedia} leaders={leaders} lastResult={props.lastResult} score={props.score} resetGame={props.resetGame} />}
      {outcome === WINALLARENAS && <WinAllArenas setMode={props.setMode} score={props.score} soundMedia={props.soundMedia} lastResult={props.lastResult} />}
      {outcome === PENDING && <main>Oops, looks like an error occurred. The result state shouldn't be pending!</main>}
    </>
  );
}

export default Outcome;