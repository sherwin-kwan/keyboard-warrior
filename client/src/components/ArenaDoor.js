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
        <h3 className="door-title">{props.name}</h3>
        <div>
          <img className="door-image"
          src={props.imgCard} 
          alt={props.name}/>
        </div>
        <footer>
          {!props.beaten &&
          <div className="points-rating">
            <div className="difficulty">
              <img
                src={props.difficulty_icon} 
                alt={props.difficulty}/>
              <div>{props.difficulty}</div>
            </div>
            <div className="points">
              <img
                src={props.points_icon} 
                alt={props.points + " POINTS"}/>
              <div>{props.points + " PTS"}</div>
            </div>
          </div>
          }
          {props.beaten && <aside>{props.beaten ? "You beat this level already 🥳" : null}</aside>} 
        </footer>
      </div> 
      <img className="door-arrow" src="/images/right-arrow.png"/>
    </div>
  );
}

export default ArenaDoor;