// Libraries
import React, { useEffect } from "react";

// Components
// import ProgressBar from '../ProgressBar';
import ArenaDoorList from '../ArenaDoorList';
import { StepProgressBar } from "../MapProgressBar";
import useGame from '../../hooks/useGame';

// Styles
import './Map.scss';

// Hooks

function Map(props) {

  console.log('Rendering map');

  useEffect(() => {
    props.updateScore();
  }, []);

  return (
    <main className="map">
      <StepProgressBar
        arenasBeaten={props.arenasBeaten}
      />
      <ArenaDoorList
        arenas={props.arenas}
        setGameMode={props.setGameMode}
        arena={props.arena}
        setArena={props.setArena}
      />
      <p>You currently have {props.score} points. Keep it up!</p>
    </main>
  );
}

export default Map;