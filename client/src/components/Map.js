// Libraries
import React from "react";

// Components
import ProgressBar from './ProgressBar';
import ArenaDoorList from './ArenaDoorList';

function Map() {
  return (
    <>
      <h1>Map</h1>
      <ProgressBar 
        playerImg='playerImg'
        bossImg='bossImg'
        arenasBeaten='3' // ????
      />
      <ArenaDoorList
        arenas={[
        {
          name: 'Hogwarts'
        }, 
        {
          name: 'Indigo Plateau'
        }, 
        {
          name: 'Minas Tirith'
        },
        {
          name: 'Final Destination'
        },
        {
          name: 'Arena 5'
        }
      ]}
      />
    </>
  );
}

export default Map;