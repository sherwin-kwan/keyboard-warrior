// Libraries
import React from "react";

function ArenaDoor(props) {
  return (
    <>
      <h1>Door to {props.name}</h1>
      <button 
        onClick={() => {
          props.setGameMode("ARENA")
          props.setArena({ name: 'Final Destination' })

        }}>
        Enter Door</button>
    </>
  );
}

export default ArenaDoor;