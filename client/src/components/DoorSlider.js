import React from "react";

function DoorSlider(props) {

  const img = (props.selected) ? "/images/yellow-dot.png" : "/images/grey-dot.png";
  const className = (props.selected) ? "selected" : "";

  return (
    <img
      className={'door-slider ' + className}
      data-cy="door-slider"
      alt="door"
      src={img}
      onClick={() => props.setCurrentDoor(props.index)}
    />
  )
}

export default DoorSlider;