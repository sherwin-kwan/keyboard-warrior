// Libraries
import React from "react";

// Components
import ArenaDoor from './ArenaDoor';

function ArenaDoorList(props) {
  const doors = props.arenas.map((arena) => {
    return <ArenaDoor 
      key={arena.name}
      name={arena.name}
      beaten={arena.beaten}
      setGameMode={props.setGameMode}
      setArena={props.setArena}
    />
  })

  return (
    <>
      <div className="title"><h1>Choose your arena!</h1></div>
      {doors}
    </>
  );
}

export default ArenaDoorList;