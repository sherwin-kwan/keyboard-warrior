// Libraries
import React from "react";

// Components
import ArenaDoor from './ArenaDoor';

function ArenaDoorList(props) {
  const doors = props.arenas.map((arena) => {
    return <ArenaDoor 
      name={arena.name}
      setGameMode={props.setGameMode}
      setArena={props.setArena}
    />
  })

  return (
    <>
      <h1>Choose your arena!</h1>
      {doors}
    </>
  );
}

export default ArenaDoorList;