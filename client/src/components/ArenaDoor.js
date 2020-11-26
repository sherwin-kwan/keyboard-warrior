// Libraries
import React from "react";

function ArenaDoor(props) {
  console.log('Props.arena is: ', props.arena);
  const pointsIcon = '/images/green-diamond.png';

  return (
    <div className="door" id={props.arena.name.toLowerCase().replace(/\s/g, '-')}>
      <img className="door-arrow" src="/images/left_arrow_circle.png"/>
      <div 
        className="card"
        disabled={props.beaten} // refactor with battles data from server
        onClick={() => {
          props.setGameMode("ARENA");
          props.setArena(props.arena);
        }}>
        <h3>{props.arena.name}</h3>
        <img 
          className="door-image"
          src={props.arena.arena_card} 
          alt={props.arena.name}
        />
        <footer>
          {!props.beaten &&
          <>
            <div className="difficulty">
              <img
                src={props.arena.Difficulty.icon} 
                alt={props.arena.Difficulty.name}
              />
              {props.arena.Difficulty.name}
            </div>
            <div className="points">
              <img
                src={pointsIcon} 
                alt={props.arena.points + " points"}
              />
              {props.arena.points + " PTS"}
            </div>
          </>}
          {(props.arena.beaten === true || props.arena.beaten === false) && <aside>{(props.arena.beaten === true || props.arena.beaten === false) ? "You played this level already" : null}</aside>} 
        </footer>
      </div>
      <img className="door-arrow" src="/images/right_arrow_circle.png"/>
    </div>
  );
}

export default ArenaDoor;