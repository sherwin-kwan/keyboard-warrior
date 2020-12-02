import React from 'react';
import ScoreTable from '../../ScoreTable';

const WinBattle = (props) => {
  
  const par_time = props.arena.Difficulty.par_time;
  const player_time = props.currentBattle.time_seconds;

  return (
    <main className="outcome win-battle">
      <div className="message">
        <h1>VICTORY</h1>
        <p>Congrats, you have triumphed over {props.arena.challenger_name} in {props.arena.name}!</p>
        <ScoreTable lastResult={props.lastResult} baseScore={props.arena.points} speedBonus={0} />
        <p>You now have a total of {props.score} points.</p>
        <button className="primary" onClick={() => props.setMode('MAP')}>Choose Next Battle</button>
      </div>
    </main>
  );
};
export default WinBattle;

// props.arena.Difficulty.par_time / props.currentBattle.time_seconds