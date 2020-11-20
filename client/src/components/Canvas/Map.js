// Libraries
import React from "react";

// Components
import ProgressBar from '../ProgressBar';
import ArenaDoorList from '../ArenaDoorList';

function Map(props) {
  // Hardcoded Data
  const arenas = [
    { name: 'Hogwarts' },
    { name: 'Indigo Plateau' },
    { name: 'Minas Tirith' },
    { name: 'Final Destination' },
    { name: 'Hotel California' },
  ]


  return (
    <>
      <h1>Map</h1>
      <ProgressBar 
        playerImg='playerImg'
        bossImg='bossImg'
        arenasBeaten='3' // ????
      />
      <ArenaDoorList
        arenas={arenas}
        setGameMode={props.setGameMode}
        setArena={props.setArena}
      />
    </>
  );
}

export default Map;