// Libraries
import React, { useState, useEffect } from "react";

// Components
import ArenaDoor from './ArenaDoor';
import DoorSlider from "./DoorSlider";

// Hooks
import useArenaDoor from "../hooks/useArenaDoor";

function ArenaDoorList(props) {

  const { currentDoor, setCurrentDoor, handleCurrentDoor } = useArenaDoor();

  // Creating an array of doors in dash-case, which can be used as arguments for the setCurrentDoor() function to display different arena doors
  const doorTagArray = props.arenas.map(arena => arena.name.toLowerCase().replace(/\s/g, '-'));

  const sliderDots = props.arenas.map((arena, ind) => {
    // const img = (handleCurrentDoor(doorTag)) ? "/images/yellow-dot.png" : "/images/grey-dot.png";
    return (<DoorSlider
      key={arena.name + '-slider'}
      index={ind}
      selected={handleCurrentDoor(ind)}
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
        <ArenaDoor
          setGameMode={props.setGameMode}
          currentDoor={currentDoor}
          setCurrentDoor={setCurrentDoor}
          arenas={props.arenas}
          setArena={props.setArena}
          doorTagArray={doorTagArray}
        />
      </div>
    </>
  );
}

export default ArenaDoorList;