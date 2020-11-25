// Libraries
import React from "react";

// Components
// import ProgressBar from '../ProgressBar';
import ArenaDoorList from '../ArenaDoorList';
import { StepProgressBar } from "../MapProgressBar";

// Styles
import './Map.scss';

// Hooks

function Map(props) {

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
    </main>
  );
}

export default Map;