// Libraries
import React from "react";

function PlayerAction(props) {
  return (
    <>
      <li>{props.name}: {props.word}</li>
    </>
  );
}

export default PlayerAction;