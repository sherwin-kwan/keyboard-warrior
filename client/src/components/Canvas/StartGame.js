// Libraries
import React from "react";

// Styles
import './StartGame.scss';

function StartGame(props) {
  return (
    <main className="start-game">
      <h1>A Typing Game</h1>
      <menu>
        <form onSubmit={(event) => {
          event.preventDefault()
          props.onSubmit(props.game.player_name)
          props.setMode("MAP")
          }
          }>
          <label htmlFor="name">Player Name:</label>
          <input 
            onChange={(event) => props.setGame({player_name: event.target.value})}
            value={props.game.player_name || ''}
            type="text" 
            id="name" 
            placeholder="Enter player name" 
            name="name"
            /><br />
          <input className="primary" type="submit" value="Start Game"/>
        </form>
        <button className="primary" onClick={() => props.setMode("CREDITS")}>Credits</button>
        <button className="primary" onClick={() => props.setMode("INSTRUCTIONS")}>Instructions</button>
        (Buttons below don't do anything yet:)
        <button className="primary">Leaderboards</button>
        <button className="primary">Settings? Mute?</button>
      </menu>
    </main>
  );
}

export default StartGame;