// Libraries
import React from "react";

function Avatar(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <img src={props.filename} width={props.width} height={props.height} />
    </>
  );
}

export default Avatar;