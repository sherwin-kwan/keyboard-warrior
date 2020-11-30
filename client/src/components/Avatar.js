// Libraries
import React from "react";

function Avatar(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <img src={props.filename} alt="Avatar" />
    </>
  );
}

export default Avatar;