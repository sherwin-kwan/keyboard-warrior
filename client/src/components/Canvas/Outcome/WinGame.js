import React, { useEffect } from 'react';
import Leaderboard from '../../Leaderboard';
import useLeaders from '../../../hooks/useLeaders';
import useGame from '../../../hooks/useGame';

// Only a template, it is currently not possible to reach this page since boss hasn't been created yet
const WinGame = (props) => {

  const { leaders, getLeaders } = useLeaders();
  const { score, getScore } = useGame();

  useEffect(() => {
    props.soundMedia.current.src = '/sounds/win-game.mp3';
    return (() => {
      props.soundMedia.current.src = '/sounds/background-music.ogg';
    });
  }, [props.soundMedia]);

  // Fetch leaders and total score from database on component mount
  useEffect(() => {
    getLeaders();
    getScore();
  }, []);

  return (
    <main className="outcome win-game">
      <p className="message">
        <h1>YOU WON!</h1>
        <p>You beat the boss and won the game with {score} points.</p>
        <Leaderboard leaders={leaders} />
        <button className="primary" onClick={() => {
          props.resetGame()
          }}>Back to Start</button>
      </p>
    </main>
  );
};

export default WinGame;