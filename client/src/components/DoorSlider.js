import React from "react";

function DoorSlider(props) {

  const img = (props.selected) ? "/images/yellow-dot.png" : "/images/grey-dot.png";
  const className = (props.selected) ? "selected" : "";

  return (
    <img
      className={'door-slider ' + className}
<<<<<<< HEAD
=======
      data-cy="door-slider"
>>>>>>> 4e6eb5229fdb81c534313e96af7ce2c06fa90846
      alt="door"
      src={img}
      onClick={() => props.setCurrentDoor(props.index)}
    />
  )
}

export default DoorSlider;