// Libraries
import React from "react";

function ArenaDoor(props) {
  // console.log('Props.arena is: ', props.arena);
  const pointsIcon = '/images/green-diamond.png';
  const disabled = (typeof props.arena.beaten === 'boolean'); // Either "true" or "false" showing that the player has already either won or lost
  // in this arena, will cause the arena door to be disabled so player cannot enter it again
  console.log(`disabled for ${props.arena.name} is: `, disabled);
  const doorClassName = disabled ? "card card-disabled" : "card";

  return (
    <div className="door" id={props.arena.name.toLowerCase().replace(/\s/g, '-')}>
      <img className="door-arrow" src="/images/left_arrow_circle.png"/>
      <div 
        className={doorClassName}
        title={disabled ? `No rematches! Please choose another arena` : `Enter arena`}
        onClick={() => {
          if (!disabled) {
            props.setGameMode("ARENA");
            props.setArena(props.arena);
          }
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
          {(props.arena.beaten === true || props.arena.beaten === false) && <aside>You played this level already</aside>} 
        </footer>
      </div>
      <img className="door-arrow" src="/images/right_arrow_circle.png"/>
    </div>
  );
}

export default ArenaDoor;