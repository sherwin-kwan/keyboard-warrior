// Libraries
import React from "react";

function ArenaDoor(props) {
  
  return (
    <>
      {/* <audio src={props.background_music} autoplay></audio> */}
      <h1>{props.name}</h1>
      <img src={props.arena_card} alt="Door"></img>
      <button 
        onClick={() => {
          props.setGameMode("ARENA")
          props.setArena({
            name: props.name,
            arena_card: props.arena_card,
            background_image: props.background_image,
            background_music: props.background_music
          })

        }}>
        Enter Door</button>
    </>
  );
}

export default ArenaDoor;