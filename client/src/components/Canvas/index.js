// Libraries
import React, { useEffect, useRef } from "react";

//helpers
import { countArenasBeaten } from "../../helpers/countArenasCompleted";

//Hooks
import useBattles from '../../hooks/useBattles';
import useGameMode from "../../hooks/useGameMode";
import useArena from "../../hooks/useArena";
import useOutcome from '../../hooks/useOutcome';
import useGame from '../../hooks/useGame';
import useMusic from '../../hooks/useMusic';

// Styles
import './index.scss';

// Components
import StartGame from './StartGame';
import Map from './Map';
import Arena from './Arena';
import Outcome from './Outcome'
import Credits from './Credits';
import Instructions from './Instructions';
import MuteButton from './MuteButton';
import Transition from './Transition';

// Contexts
// import GameContext from '../../helpers/gameContext';

function Canvas(props) {

  // Modes
  const START = "START";
  const MAP = "MAP";
  const ARENA = "ARENA";
  const OUTCOME = "OUTCOME";
  const CREDITS = "CREDITS";
  const INSTRUCTIONS = "INSTRUCTIONS";
  const TRANSITION = "TRANSITION";


  //hooks
  const { mode, setMode } = useGameMode("START")
  const { arenas, setArenas, arena, setArena, cleanArenas } = useArena();
  const { outcome, setOutcome } = useOutcome('PENDING');
  const { startBattle, endBattle, style, handleAttackAnimation, currentBattle, setCurrentBattle } = useBattles();
  const { game, setGame, startGame, score, setScore, updateScore, lastResult } = useGame();
  const { music, setMusic } = useMusic();

  // Load background music
  const soundMedia = useRef(null);

  // Sub-modes of the outcome mode
  const WINGAME = 'WINGAME'; // Player won the whole game
  const LOSEBATTLE = 'LOSEBATTLE'; // Player lost an arena
  const WINBATTLE = 'WINBATTLE'; // Player won the arena
  const LOSEGAMENOTBOSS = "LOSEGAMENOTBOSS" // Player lost the game because they lost too many arenas before they reached a boss
  const LOSEGAMETOBOSS = "LOSEGAMETOBOSS" // Player reached the boss but lost against the boss, thus losing the game
  const WINALLARENAS = "WINALLARENAS" // Player has won 5 arenas and is about to face the boss

  useEffect(() => {

    async function playMusic() {

      // Set initial music source

      if (mode === OUTCOME) {
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
            break;
        }
        soundMedia.current.loop = false;
      } else {
        soundMedia.current.src = '/sounds/background-music.mp3';
        soundMedia.current.loop = true;
      }

      // Some browsers do not allow auto-play, if promise rejects send a console log
      try {
        if (soundMedia.current.paused) await soundMedia.current.play();
      } catch (err) {
        console.log('Music could not be played');
      }

    };

    // Start music if curretly not playing
    playMusic();
  }, [mode]);

  useEffect(() => {
    const aaa = arena ? true : false;
    console.log('Props.arena is ', arena, 'and this is true? ', aaa);
  }, [mode]);

  useEffect(() => {
    soundMedia.current.volume = music ? 0.1 : 0.0;
  }, [music]);

  // reset game function
  const resetGameState = function () {
    setMode("START");
    setGame({});
    setArena([]);
    setScore(0);
    setArenas(cleanArenas.filter(arena => arena.name !== 'Boss'));
    setOutcome("PENDING");
    setCurrentBattle([]);
  };

  return (
    <>
      <audio autoPlay loop ref={soundMedia} src='/sounds/background-music.mp3' >
        Your browser does not support HTML audio.
      </audio>
      <div className="canvas">
        <MuteButton
          music={music}
          setMusic={setMusic}
        />
        {mode === START && <StartGame
          setMode={setMode}
          setGame={setGame}
          game={game}
          onSubmit={startGame} />
        }
        {mode === MAP && <Map
          setGameMode={setMode}
          score={score}
          game={game}
          updateScore={updateScore}
          arena={arena}
          arenas={arenas}
          setArena={setArena}
          arenasBeaten={countArenasBeaten(arenas)} />
        }
        {mode === ARENA && <Arena
          setOutcome={setOutcome}
          setScore={setScore}
          initialPlayerHealth={100}
          challengerHealth={100}
          currentBattle={currentBattle}
          setCurrentBattle={setCurrentBattle}
          startBattle={startBattle}
          endBattle={endBattle}
          style={style}
          handleAttackAnimation={handleAttackAnimation}
          setMode={setMode}
          arena={arena}
          arenas={arenas}
          setArenas={setArenas}
          game={game}
        />}
        {mode === TRANSITION && <Transition
          outcome={outcome}
        />}
        {mode === OUTCOME && <Outcome
          cleanArenas={cleanArenas}
          outcome={outcome}
          lastResult={lastResult}
          soundMedia={soundMedia}
          setMode={setMode}
          score={score}
          updateScore={updateScore}
          resetGame={resetGameState}
          currentBattle={currentBattle}
          arena={arena}
          setArena={setArena}
          cleanArenas={cleanArenas}
        />}
        {mode === CREDITS && <Credits
          setMode={setMode}
        />}
        {mode === INSTRUCTIONS && <Instructions
          setMode={setMode}
          arena={arena}
        />}
      </div>
    </>
  );
}

export default Canvas;
