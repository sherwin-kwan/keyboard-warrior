// Libraries
import React from "react";

function StartGame(props) {
  return (
    <>
    <h1>Start Game</h1>
    <button
      onClick={() => {props.onClick("MAP")}}
    >Start Game</button>
    </>
  );
}

export default StartGame;