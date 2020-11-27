import React from 'react';
import './Instructions.scss'

function Instructions(props) {
  return (
    <main className="instructions">
      <div className="instructions">
        <h1>Instructions</h1>
        <h2>Your Objective:</h2>
        <p>Battle your way through 5 arenas to get to the boss. Beat the boss and win the game!</p>
        <img src="/images/progress-bar.png" alt="Progress bar" />
        <h2>Battling:</h2>
        <p>Type the words that show up to attack for 10 damage or heal 10 health.</p>
        <img src="/images/words-to-type.png" alt="Battle arena" />
        <h2>Scoring:</h2>
        <p>Earn more points by choosing more difficult arenas.</p>
        <img src="/images/difficulty-and-points.png" alt="Difficulty and points" />
        <p>Beat the game faster to get a bonus multiplier and top the leaderboards!</p>
        <img src="/images/leaderboards.png" alt="Leaderboards" />
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