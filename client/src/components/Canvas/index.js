// Libraries
import React from "react";
import useGameMode from "../../hooks/useGameMode";


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

  const { mode, setMode } = useGameMode("START")

  return (
    <div className="Canvas">
      {mode === START && <StartGame
          onClick={setMode} />
      }
      {mode === MAP && <Map />}
      {mode === ARENA && <Arena />}
      {mode === OUTCOME && <Outcome />}
    </div>
  );
}

export default Canvas;