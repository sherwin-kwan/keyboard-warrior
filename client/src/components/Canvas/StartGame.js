// Libraries
import React from "react";

function StartGame(props) {
  return (
    <>
    <h1>Start Game</h1>
    <button
      onClick={() => {props.onClick("MAP")}}
    >To Map</button>
    </>
  );
}

export default StartGame;