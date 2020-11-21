// Libraries
import React from "react";
import useGameMode from "../../hooks/useGameMode";
import useArena from "../../hooks/useArena";
import TempNavBar from '../TempNavBar';


// Styles
// import 'styles/App.css';

// Components
import StartGame from './StartGame';
import Map from './Map';
import Arena from './Arena';
import Outcome from './Outcome'


function Canvas(props) {

  //MODES
  const START = "START";
  const MAP = "MAP";
  const ARENA = "ARENA";
  const OUTCOME = "OUTCOME";

  

  const { mode, setMode } = useGameMode("ARENA")
  const { arenas, setArenas, arena, setArena } = useArena()
  

  return (
    <>
      <TempNavBar onClick={setMode} />
      <div className="Canvas">
        {mode === START && <StartGame
          onClick={setMode} />
        }
        {mode === MAP && <Map
         setGameMode={setMode}
         arenas={arenas}
         setArena={setArena} />
         }
        {mode === ARENA && <Arena
          arena={arena} />}
        {mode === OUTCOME && <Outcome />}
      </div>
    </>
  );
}

export default Canvas;