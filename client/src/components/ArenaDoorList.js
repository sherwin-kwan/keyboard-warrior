// Libraries
import React, { useState, useEffect } from "react";

// Components
import ArenaDoor from './ArenaDoor';
import DoorSlider from "./DoorSlider";

// Hooks
import useArenaDoor from "../hooks/useArenaDoor";

function ArenaDoorList(props) {

  const { setCurrentDoor, handleCurrentDoor } = useArenaDoor();
  
  const doors = props.arenas.map((arena) => {
    return (<ArenaDoor 
      setGameMode={props.setGameMode}
      arena={arena}
      setArena={props.setArena}
    />)
  });
  
  const sliderDots = props.arenas.map(arena => {
    const doorTag = arena.name.toLowerCase().replace(/\s/g, '-');
    // const img = (handleCurrentDoor(doorTag)) ? "/images/yellow-dot.png" : "/images/grey-dot.png";
    return (<DoorSlider
      key={arena.name + '-slider'}
      name={doorTag}
      selected={handleCurrentDoor(doorTag)}
      setCurrentDoor={setCurrentDoor}
    />);
  });

  return (
    <>
      <h2>Choose your arena!</h2>
      <div className="door-slider-dots">
        {sliderDots}
      </div>
      <div className="doors-container">
        {doors}
      </div>
    </>
  );
}

export default ArenaDoorList;