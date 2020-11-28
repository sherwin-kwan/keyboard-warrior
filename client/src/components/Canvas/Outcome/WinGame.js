import React, { useEffect } from 'react';

// Only a template, it is currently not possible to reach this page since boss hasn't been created yet
const WinGame = (props) => {

  useEffect(() => {
    props.soundMedia.current.src = '/sounds/win-game.mp3';
    return (() => {
      props.soundMedia.current.src = '/sounds/background-music.ogg';
    });
  }, [props.soundMedia]);

  return (
    <main className="outcome win-game">
      <p className="message">
        <h1>YOU WON!</h1>
        <p>You beat the boss and won the game! You now have a position on the game leaderboard.</p>
        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sherwin</td>
              <td>4000</td>
            </tr>
            <tr>
              <td>Jillian</td>
              <td>3999</td>
            </tr>
            <tr>
              <td>Helen</td>
              <td>3998</td>
            </tr>
            <tr>
              <td>Rick Astley</td>
              <td>30</td>
            </tr>
            <tr>
              <td>You!!</td>
              <td>20</td>
            </tr>
          </tbody>
        </table>
        <button className="primary" onClick={() => {
          props.resetGame()
          }}>Back to Start</button>
      </p>
    </main>
  );
};

export default WinGame;