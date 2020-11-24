// Libraries
import React from "react";

// Components
import ArenaDoor from './ArenaDoor';
import DoorSlider from "./DoorSlider";
import doorSlider from './DoorSlider';

function ArenaDoorList(props) {

  const doors = props.arenas.map((arena) => {
    return <ArenaDoor 
      name={arena.name}
      imgCard={arena.arena_card}
      music={arena.background_music}
      imgBack={arena.background_image}
      beaten={arena.beaten}
      setGameMode={props.setGameMode}
      setArena={props.setArena}
    />
  })

  const sliderDots = props.arenas.map(arena => {
    return (<DoorSlider
    name={arena.name.toLowerCase().replace(/\s/g, '-')}
    />)
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
      <div className="container-of-doors">
        {doors}
      </div>
    </>
  );
}

export default ArenaDoorList;