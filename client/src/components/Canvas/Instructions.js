import React, { useEffect } from 'react';

// Styles
import './Instructions.scss'

// Hooks
import useLeaders from '../../hooks/useLeaders';

// Components
import Leaderboard from '../Leaderboard';

function Instructions(props) {

  const { leaders, getLeaders } = useLeaders();

  useEffect(() => {
    getLeaders();
  }, []);

  return (
    <main className="instructions">
      <div className="instructions">
        <h1>Instructions</h1>
        <h2>Your Objective:</h2>
        <p>Win 5 battles to get to the final boss. Then beat the boss to win the game!</p>
        <img src="/images/progress-bar.png" alt="Progress bar" />
        <h2>Battling:</h2>
        <p>Type the words that show up to attack for 10 damage or heal 10 health.</p>
        <img src="/images/words-to-type.png" alt="Battle arena" />
        <h2>Scoring:</h2>
        <p>Earn more points by choosing more difficult arenas.</p>
        <img src="/images/difficulty-and-points.png" alt="Difficulty and points" />
        <p>"30 PTS" is the base score you get for winning the battle.</p>
        <p>If you beat the game faster, you'll get a bonus multiplier and top the leaderboards!</p>
        <p>CURRENT LEADERS</p>
        <Leaderboard leaders={leaders} />
        <button
          className="primary"
          onClick={() => props.setMode("START")}
        >
          {`Got it? Let's play!`}
        </button>
      </div>
    </main>
  );
}

export default Instructions;