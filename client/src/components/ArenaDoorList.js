// Libraries
import React from "react";

// Components
import ArenaDoor from './ArenaDoor';

function ArenaDoorList(props) {
  console.log("JILLIAN", props.arenas)
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

  return (
    <>
      <div 
      className="title">
        <h1>Choose your arena!</h1>
      </div>
      {doors}
    </>
  );
}

export default ArenaDoorList;