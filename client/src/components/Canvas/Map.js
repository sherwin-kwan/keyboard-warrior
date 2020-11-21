// Libraries
import React from "react";

// Components
// import ProgressBar from '../ProgressBar';
import ArenaDoorList from '../ArenaDoorList';
import { StepProgressBar } from "../MapProgressBar";


// Hooks

function Map(props) {


  return (
    <>
      <h1>Map</h1>
      <StepProgressBar
        percent="60"
        playerImg='playerImg'
        bossImg='bossImg'
        arenasBeaten='3' // ????
      />
      <ArenaDoorList
        arenas={props.arenas}
        setGameMode={props.setGameMode}
        arenas={props.arenas}
        setArena={props.setArena}
      />
    </>
  );
}

export default Map;