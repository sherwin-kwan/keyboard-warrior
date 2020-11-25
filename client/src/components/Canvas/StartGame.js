// Libraries
import React from "react";

// Styles
import './StartGame.scss';

function StartGame(props) {
  return (
    <main className="start-game">
      <h1>A Typing Game</h1>
      <div className="menu">
        <form onSubmit={event => event.preventDefault()}>
          <label for="name">Player Name:</label><br/>
          <input 
            type="text" 
            id="name" 
            placeholder="Enter player name" 
            name="name"
            onChange={(event) => {
              props.setGame(
                {
                  player_name: event.target.value
                }
              )
            }}
            /><br/>
        </form>
        <button
          onClick={() => { 
            props.setMode("MAP") 
          }}
        >Start Game
        </button>
        (Following buttons don't do anything yet:)
        <button>Credits</button>
        <button>Instructions</button>
        <button>Settings</button>
      </div>
    </main>
  );
}

export default StartGame;