// Libraries
import React from "react";

// Components
import ArenaDoor from './ArenaDoor';
import DoorSlider from "./DoorSlider";

function ArenaDoorList(props) {

<<<<<<< HEAD
  const doors = props.arenas.map(arena => {
    return (
      <ArenaDoor 
        key={arena.name}
        name={arena.name}
        imgCard={arena.arena_card}
        difficulty={arena.Difficulty}
        points={arena.points}
        setGameMode={props.setGameMode}
        setArena={props.setArena}
      />)
=======
  const doors = props.arenas.map((arena) => {
    return <ArenaDoor 
      // name={arena.name}
      // key={arena.name}
      // imgCard={arena.arena_card}
      // music={arena.background_music}
      // imgBack={arena.background_image}
      // beaten={arena.beaten}
      // difficulty={arena.Difficulty.name}
      // difficulty_icon={arena.Difficulty.icon}
      // points={arena.points}
      // points_icon={arena.points_icon}
      setGameMode={props.setGameMode}
      arena={arena}
      setArena={props.setArena}
    />
>>>>>>> 19b7181976924916920bc47bc5d4b9b5decca899
  })

  const sliderDots = props.arenas.map(arena => {
    return (<DoorSlider
    key={arena.name + '-slider'}
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