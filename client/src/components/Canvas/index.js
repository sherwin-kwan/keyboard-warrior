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

<<<<<<< HEAD
  const { mode, setMode } = useGameMode("START")
  const { arena, setArena } = useArena({ name: 'Hogwarts' })
=======
  const { mode, setMode } = useGameMode("ARENA")
>>>>>>> 72a4819bb7e33610016833641e2b6bec0166e425

  return (
    <>
      <TempNavBar onClick={setMode} />
      <div className="Canvas">
        {mode === START && <StartGame
          onClick={setMode} />
        }
        {mode === MAP && <Map
         setGameMode={setMode}
         setArena={setArena} />
         }
        {mode === ARENA && <Arena />}
        {mode === OUTCOME && <Outcome />}
      </div>
    </>
  );
}

export default Canvas;