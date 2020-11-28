// Libraries
import React, { useContext, useEffect, useRef } from "react";

//helpers
import { countArenasBeaten, countArenasLost } from "../../helpers/countArenasCompleted";

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
import TempNavBar from '../TempNavBar';
import StartGame from './StartGame';
import Map from './Map';
import Arena from './Arena';
import Outcome from './Outcome'
import Credits from './Credits';
import Instructions from './Instructions';
import MuteButton from './MuteButton';

// Contexts
// import GameContext from '../../helpers/gameContext';

function Canvas(props) {

  // Modes
  const START = "START";
  const MAP = "MAP";
  const ARENA = "ARENA";
  const OUTCOME = "OUTCOME";
  const BOSS = "BOSS";
  const CREDITS = "CREDITS";
  const INSTRUCTIONS = "INSTRUCTIONS";

  
  //hooks
  const { mode, setMode } = useGameMode("START")
  const { arenas, setArenas, arena, setArena, cleanArenas, handleBossArena } = useArena();
  const { outcome, setOutcome } = useOutcome('PENDING');
  const { battles, setBattles, setCurrentBattle } = useBattles();
  const { game, setGame, startGame, score, updateScore } = useGame(); 
  const { music, setMusic } = useMusic(); 

  // Load background music
  const soundMedia = useRef(null);

  useEffect(() => {
    if (music === "ON") {
    console.log('PLAYING MUSIC!!');
    soundMedia.current.play();
    soundMedia.current.volume = 0.1; // Make sure you leave the volume setting here - otherwise it's too loud!!
    } else {
      // soundMedia.current.stop();
      soundMedia.current.volume = 0.0;
    }
  }, [mode, music]);

  // reset game function
  const resetGameState = function() {
    setMode("START");
    setGame({});
    setArena([])
    setArenas(cleanArenas)
    setOutcome("PENDING")
    setCurrentBattle([])
  }

  return (
    <>
      <TempNavBar onClick={setMode} />
      <audio autoPlay loop ref={soundMedia} src='/sounds/background-music.ogg' >
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
          initialPlayerHealth = {100}
          challengerHealth = {100}
          setMode={setMode}
          arena={arena}
          arenas={arenas}
          setArenas={setArenas}
          game={game}
        />}
        {mode === BOSS && <Arena
          setOutcome={setOutcome}
          initialPlayerHealth = {100}
          challengerHealth = {100}
          setMode={setMode}
          arena={handleBossArena()}
          arenas={arenas}
          setArenas={setArenas}
          game={game}
        />}
        {mode === OUTCOME && <Outcome 
          outcome={outcome}
          soundMedia={soundMedia}
          setMode={setMode}
          score={score}
          updateScore={updateScore}
          resetGame={resetGameState}
          arena={arena.name}
          challenger={arena.challenger_name}
        />}
        {mode === CREDITS && <Credits
          setMode={setMode}
        />}
        {mode === INSTRUCTIONS && <Instructions
          setMode={setMode}
        />}
      </div>
    </>
  );
}

export default Canvas;
