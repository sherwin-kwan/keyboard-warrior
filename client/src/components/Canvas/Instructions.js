import React from 'react';
import './Instructions.scss'

function Instructions(props) {
  return (
    <main className="instructions">
      <div className="instructions">
        <h1>Instructions</h1>
        <h2>Your Objective:</h2>
        <p>Battle your way through 5 arenas to get to the boss. Beat the boss and win the game!</p>
        <h2>Battling:</h2>
        <p>Type the words that show up to attack or heal.</p>
        <img src="" alt="Attack icon" />Deal 10 damage
        <img src="" alt="Heal icon" />Heal 10 health
        <h2>Scoring:</h2>
        <p>Earn more points by choosing more difficult arenas.
        <img src="" alt="Points" />
        Beat the game faster to get a bonus multiplier.
        <img src="" alt="Leaderboards" /></p>
        <button
          className="primary"
          onClick={() => props.setMode("START")}
        >
          Got it, Let's Play!
        </button>
      </div>
    </main>
  );
}

export default Instructions;