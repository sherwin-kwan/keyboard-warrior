// Libraries
import React from "react";

function Avatar(props) {
  return (
    <>
      <h1>Avatar</h1>
      <img src={props.filename} />
      <p>{props.name}</p>
    </>
  );
}

export default Avatar;