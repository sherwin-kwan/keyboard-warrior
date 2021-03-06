import React from 'react';
import Leaderboard from '../../Leaderboard';

const LoseGameToBoss = (props) => {

  return (
    <main className="outcome lose-game">
      <div className="message">
        <h1>DEFEAT</h1>
        <p>You put up a valiant fight, but the boss was too much for you. Too bad. You can try again though!</p>
        <p>You collected {props.score} points this game. However, because you did not defeat the final boss, your name will not be immortalized on the leaderboard.</p>

        <Leaderboard leaders={props.leaders} />
        <button className="primary" onClick={() => {
          props.resetGame()
        }
        }>Back to start</button>
      </div>

    </main>
  );
};
export default LoseGameToBoss;