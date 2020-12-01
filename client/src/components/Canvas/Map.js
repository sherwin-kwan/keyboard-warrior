// Libraries
import React, { useEffect } from "react";

// Components
// import ProgressBar from '../ProgressBar';
import ArenaDoorList from '../ArenaDoorList';
import { StepProgressBar } from "../MapProgressBar";

// Styles
import './Map.scss';

// Hooks

function Map(props) {

  useEffect(() => {
    props.updateScore();
  }, [props.game]);

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
      <p className="score">POINTS: <strong>{props.score}</strong></p>
    </main>
  );
}

export default Map;