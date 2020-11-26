import React, { useEffect } from "react";

function DoorSlider(props) {

  return (
    <a href={"#" + props.name}>
      <img 
        alt="door" 
        src={props.img}
        onClick={() => props.setCurrentDoor(props.name)}
      />
    </a>
  )
}

export default DoorSlider;