// Libraries
import React from "react";

function ArenaDoor(props) {
  console.log('Props.arena is: ', props.arena);
  const pointsIcon = '/images/green-diamond.png';

  return (
    <div className="door" id={props.arena.name.toLowerCase().replace(/\s/g, '-')}>
      <img className="door-arrow" src="/images/left-arrow.png"/>
      <div 
      className="card"
      disabled={props.beaten}
      onClick={() => {
        props.setGameMode("ARENA");
        props.setArena(props.arena);
      }}>
        <h3 className="door-title">{props.arena.name}</h3>
        <div>
          <img className="door-image"
          src={props.arena.arena_card} 
          alt={props.arena.name}/>
        </div>
        <footer>
          {!props.beaten &&
          <div className="points-rating">
            <div className="difficulty">
              <img
                src={props.arena.Difficulty.icon} 
                alt={props.arena.Difficulty.name}/>
              <div>{props.arena.Difficulty.name}</div>
            </div>
            <div className="points">
              <img
                src={pointsIcon} 
                alt={props.arena.points + " POINTS"}/>
              <div>{props.arena.points + " PTS"}</div>
            </div>
          </div>
          }
          {props.arena.beaten && <aside>{props.arena.beaten ? "You beat this level already 🥳" : null}</aside>} 
        </footer>
      </div> 
      <img className="door-arrow" src="/images/right-arrow.png"/>
    </div>
  );
}

export default ArenaDoor;