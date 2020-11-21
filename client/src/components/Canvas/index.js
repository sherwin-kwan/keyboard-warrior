// Libraries
import React from "react";
import useGameMode from "../../hooks/useGameMode";
import useArena from "../../hooks/useArena";
import TempNavBar from '../TempNavBar';
import lookupArenasBeaten from "../../helpers/lookupArenasBeaten";

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

  
  //hooks
  const { mode, setMode } = useGameMode("START")
  const { arenas, setArenas, arena, setArena } = useArena()

  console.log("JILLIAN", lookupArenasBeaten(arenas))
  
  return (
    <>
      <TempNavBar onClick={setMode} />
      <div className="Canvas">
        {mode === START && <StartGame
          setMode={setMode} />
        }
        {mode === MAP && <Map
          setGameMode={setMode}
          arenas={arenas}
          setArena={setArena}
          arenasBeaten={lookupArenasBeaten(arenas)} />
      }
        {mode === ARENA && <Arena
          initialPlayerHealth = {80}
          challengerHealth = {100}
          setMode={setMode}
          arena={arena}
          arenas={arenas}
          setArenas={setArenas}
        />}
        {mode === OUTCOME && <Outcome 
        setMode={setMode}
        />}
      </div>
    </>
  );
}

export default Canvas;
