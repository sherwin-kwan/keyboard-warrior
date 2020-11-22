// Libraries
import React from "react";
import useGameMode from "../../hooks/useGameMode";
import useArena from "../../hooks/useArena";
import useResult from '../../hooks/useResult';
import TempNavBar from '../TempNavBar';
import lookupArenasBeaten from "../../helpers/lookupArenasBeaten";

// Styles
import './index.scss';

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
  const { result, setResult } = useResult('PENDING');
  // Possible results are: "WinGame", "WinBattle", "LoseGame", "Pending"
  
  return (
    <>
      <TempNavBar onClick={setMode} />
      <div className="canvas">
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
          setResult={setResult}
          initialPlayerHealth = {80}
          challengerHealth = {100}
          setMode={setMode}
          arena={arena}
          arenas={arenas}
          setArenas={setArenas}
        />}
        {mode === OUTCOME && <Outcome 
        result={result}
        setMode={setMode}
        />}
      </div>
    </>
  );
}

export default Canvas;
