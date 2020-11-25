// Libraries
import React from "react";

// Components
import ArenaDoor from './ArenaDoor';
import DoorSlider from "./DoorSlider";

function ArenaDoorList(props) {

  const doors = props.arenas.map((arena) => {
    return <ArenaDoor 
      setGameMode={props.setGameMode}
      arena={arena}
      setArena={props.setArena}
    />
  })

  const sliderDots = props.arenas.map(arena => {
    return (
      <DoorSlider
        key={arena.name + '-slider'}
        name={arena.name.toLowerCase().replace(/\s/g, '-')}
      />
    );
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