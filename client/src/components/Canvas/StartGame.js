// Libraries
import React from "react";

// Styles
import './StartGame.scss';

function StartGame(props) {
  return (
    <main className="start-game">
      <h1>A Typing Game</h1>
      <menu>
        <button className="primary" onClick={() => props.setMode("MAP")}>
          Start Game
        </button>
        (Following buttons don't do anything yet:)
        <button className="primary">Credits</button>
        <button className="primary">Instructions</button>
        <button className="primary">Settings</button>
      </menu>
    </main>
  );
}

export default StartGame;