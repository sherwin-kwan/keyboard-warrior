// Libraries
import React, { useEffect, useRef } from "react";
<<<<<<< HEAD

// Hooks
import useGameMode from "../../hooks/useGameMode";
import useArena from "../../hooks/useArena";
import useOutcome from '../../hooks/useOutcome';

// Helpers
import lookupArenasBeaten from "../../helpers/lookupArenasBeaten";
=======
import TempNavBar from '../TempNavBar';
import lookupArenasBeaten from "../../helpers/lookupArenasBeaten";



//Hooks
import useBattles from '../../hooks/useBattles';
import useGameMode from "../../hooks/useGameMode";
import useArena from "../../hooks/useArena";
import useResult from '../../hooks/useResult';
import useGame from '../../hooks/useGame';
>>>>>>> 19b7181976924916920bc47bc5d4b9b5decca899

// Styles
import './index.scss';

// Components
import TempNavBar from '../TempNavBar';
import StartGame from './StartGame';
import Map from './Map';
import Arena from './Arena';
import Outcome from './Outcome'

function Canvas(props) {

  // Modes
  const START = "START";
  const MAP = "MAP";
  const ARENA = "ARENA";
  const OUTCOME = "OUTCOME";

  
<<<<<<< HEAD
  // Use hooks
  const { mode, setMode } = useGameMode("START");
  const { arenas, setArenas, arena, setArena } = useArena();
  const { outcome, setOutcome } = useOutcome('PENDING');
  // Possible outcomes are: "WinGame", "WinBattle", "LoseGame", "Pending"
=======
  //hooks
  const { mode, setMode } = useGameMode("START")
  const { arenas, setArenas, arena, setArena } = useArena()
  const { result, setResult } = useResult('PENDING');
  const { battles, setBattles } = useBattles();
  const { game, setGame } = useGame();
  // Possible results are: "WinGame", "WinBattle", "LoseGame", "Pending"
>>>>>>> 19b7181976924916920bc47bc5d4b9b5decca899

  // Load background music
  const soundMedia = useRef(null);

  useEffect(() => {
    console.log('PLAYING MUSIC!!');
    soundMedia.current.play();
    soundMedia.current.volume = 0; // Make sure you leave the volume setting here - otherwise it's too loud!!
  }, [soundMedia, mode]);
  
  return (
    <>
      <TempNavBar onClick={setMode} />
      <audio autoPlay ref={soundMedia} src='/sounds/background-music.ogg' >
        Your browser does not support HTML audio.
      </audio>
      <div className="canvas">
        {mode === START && <StartGame
          setMode={setMode}
          setGame={setGame} />
        }
        {mode === MAP && <Map
          setGameMode={setMode}
          arena={arena}
          arenas={arenas}
          setArena={setArena}
          arenasBeaten={lookupArenasBeaten(arenas)} />
        }
        {mode === ARENA && <Arena
          setOutcome={setOutcome}
          initialPlayerHealth = {80}
          challengerHealth = {100}
          setMode={setMode}
          arena={arena}
          arenas={arenas}
          setArenas={setArenas}
          setBattles={setBattles}
        />}
        {mode === OUTCOME && <Outcome 
        outcome={outcome}
        soundMedia={soundMedia}
        setMode={setMode}
        />}
      </div>
    </>
  );
}

export default Canvas;
