// Libraries
import React, { useEffect, useRef } from "react";

//helpers
import { countArenasBeaten, countArenasLost } from "../../helpers/countArenasCompleted";

//Hooks
import useBattles from '../../hooks/useBattles';
import useGameMode from "../../hooks/useGameMode";
import useArena from "../../hooks/useArena";
import useOutcome from '../../hooks/useOutcome';
import useGame from '../../hooks/useGame';

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
  const { game, setGame, startGame } = useGame(); 


  // Load background music
  const soundMedia = useRef(null);

  useEffect(() => {
    console.log('PLAYING MUSIC!!');
    soundMedia.current.play();
    soundMedia.current.volume = 0; // Make sure you leave the volume setting here - otherwise it's too loud!!
  }, [soundMedia, mode]);

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
      <audio autoPlay ref={soundMedia} src='/sounds/background-music.ogg' >
        Your browser does not support HTML audio.
      </audio>
      <div className="canvas">
        {mode === START && <StartGame
          setMode={setMode}
          setGame={setGame}
          game={game}
          onSubmit={startGame} />
        }
        {mode === MAP && <Map
          setGameMode={setMode}
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
          resetGame={resetGameState}
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
