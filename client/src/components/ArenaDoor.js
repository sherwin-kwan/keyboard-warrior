// Libraries
import React from "react";

function ArenaDoor(props) {

  const { arenas, currentDoor, setCurrentDoor } = props;

  const arena = arenas[currentDoor];

  const pointsIcon = '/images/green-diamond.png';
  const disabled = (typeof arena.beaten === 'boolean'); // Either "true" or "false" showing that the player has already either won or lost
  // in this arena, will cause the arena door to be disabled so player cannot enter it again
  const doorClassName = disabled ? "card card-disabled" : "card";

  const setPreviousDoor = () => {
    console.log('Changing to previous door');
    setCurrentDoor(prev => (prev !== 0) ? prev - 1 : prev);
  };

  const setNextDoor = () => {
    setCurrentDoor(prev => (prev !== arenas.length - 1) ? prev + 1 : prev);
  };

  return (
    <div className="door">
      <img className="door-arrow" src="/images/left_arrow_circle.png" onClick={setPreviousDoor} />
      <div
        className={doorClassName}
        title={disabled ? `No rematches! Please choose another arena` : `Enter arena`}
        onClick={() => {
          if (!disabled) {
            props.setGameMode("ARENA");
            props.setArena(arena);
          }
        }}>
        <h3>{arena.name}</h3>
        <img
          className="door-image"
          src={arena.arena_card}
          alt={arena.name}
        />
        <footer>
          {!props.beaten &&
            <>
              <div className="difficulty">
                <img
                  src={arena.Difficulty.icon}
                  alt={arena.Difficulty.name}
                />
                {arena.Difficulty.name}
              </div>
              <div className="points">
                <img
                  src={pointsIcon}
                  alt={arena.points + " points"}
                />
                {arena.points + " PTS"}
              </div>
            </>}
          {(arena.beaten === true) && <aside>Congrats, you beat this level!</aside>}
          {(arena.beaten === false) && <aside>You were defeated!</aside>}
        </footer>
      </div>
      <img className="door-arrow" src="/images/right_arrow_circle.png" onClick={setNextDoor} />
    </div>
  );
}

export default ArenaDoor;