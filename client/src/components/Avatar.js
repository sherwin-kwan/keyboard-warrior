// Libraries
import React from "react";

function Avatar(props) {
  return (
    <>
      <img src={props.filename} width={props.width} height={props.height} />
      <p>{props.name}</p>
    </>
  );
}

export default Avatar;