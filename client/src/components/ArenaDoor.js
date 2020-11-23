// Libraries
import React from "react";

function ArenaDoor(props) {

  return (
    <div className="door" id={props.name.toLowerCase().replace(/\s/g, '-')}>
      <img src="/images/left-arrow.png"/>
      <div 
      className="card"
      disabled={props.beaten}
      onClick={() => {
        props.setGameMode("ARENA")
        props.setArena({
          name: props.name,
          arena_card: props.imgCard,
          background_image: props.imgBack,
          background_music: props.music
        })

      }}>
        <h3 class="door-title">{props.name}</h3>
        <div>
          <img 
          src={props.imgCard} 
          alt={props.name}></img>
        </div>
          {props.beaten && <aside>{props.beaten ? "You beat this level already 🥳" : null}</aside>} 
      </div> 
      <img src="/images/right-arrow.png"/>
    </div>
  );
}

export default ArenaDoor;