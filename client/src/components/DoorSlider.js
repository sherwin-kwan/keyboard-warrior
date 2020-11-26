import React, { useEffect } from "react";

function DoorSlider(props) {

  const img = (props.selected) ? "/images/yellow-dot.png" : "/images/grey-dot.png";
  const className = (props.selected) ? "selected" : "";

  return (
    <a href={"#" + props.name}>
      <img
        className={className}
        alt="door" 
        src={img}
        onClick={() => props.setCurrentDoor(props.name)}
      />
    </a>
  )
}

export default DoorSlider;