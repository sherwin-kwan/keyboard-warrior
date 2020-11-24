// Libraries
import React from "react";

function ArenaDoor(props) {

  return (
    <div className="door" id={props.name.toLowerCase().replace(/\s/g, '-')}>
      <img className="door-arrow" src="/images/left-arrow.png"/>
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
          <img class="door-image"
          src={props.imgCard} 
          alt={props.name}/>
        </div>
        <footer>
          {props.beaten && <aside>{props.beaten ? "You beat this level already 🥳" : null}</aside>} 
        </footer>
      </div> 
      <img className="door-arrow" src="/images/right-arrow.png"/>
    </div>
  );
}

export default ArenaDoor;