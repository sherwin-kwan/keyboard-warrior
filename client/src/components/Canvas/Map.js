// Libraries
import React from "react";

// Components
import ProgressBar from '../ProgressBar';
import ArenaDoorList from '../ArenaDoorList';

// Hooks

function Map(props) {


  return (
    <>
      <h1>Map</h1>
      <ProgressBar 
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