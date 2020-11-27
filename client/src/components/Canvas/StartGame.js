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
<<<<<<< HEAD
          <label htmlFor="name">Player Name:</label><br/>
=======
          <label for="name">Player Name:</label>
>>>>>>> 9989b6cff45a5640ce06150c97b6d466e5843e6c
          <input 
            onChange={(event) => props.setGame({player_name: event.target.value})}
            value={props.game.player_name || ''}
            type="text" 
            id="name" 
            placeholder="Enter player name" 
            name="name"
            />
          <input className="primary" type="submit" value="Start Game"/>
        </form>
        (Following buttons don't do anything yet:)
        <button className="primary">Credits</button>
        <button className="primary">Instructions</button>
        <button className="primary">Settings</button>
      </menu>
    </main>
  );
}

export default StartGame;