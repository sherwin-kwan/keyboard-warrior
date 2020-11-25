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
      <div 
      className="title">
        <h1>Choose your arena!</h1>
        <div className="door-slider-dots">
        {sliderDots}
        </div>
      </div>
      <div className="doors-container">
        {doors}
      </div>
    </>
  );
}

export default ArenaDoorList;