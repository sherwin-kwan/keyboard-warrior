import React from 'react';
import ScoreTable from '../../ScoreTable';

const WinBattle = (props) => {
  

  return (
    <main className="outcome win-battle">
      <div className="message">
        <h1>VICTORY</h1>
        <p>Congrats, you have triumphed over {props.arena.challenger_name} in {props.arena.name}!</p>
        {props.allArenas && <p>You beat 5 levels! That means you now enter the arena with the boss. Win this fight and you win the game. Good luck!</p>}
        <ScoreTable result={props.resultProps} />
        <p>{props.allArenas ? 'Heading into the final fight, you have' : 'You now have'} a total of {props.score} points.</p>
        <button className="primary" onClick={() => props.allArenas ? props.setMode('BOSS') : props.setMode('MAP')}>
          {props.allArenas ? 'Continue To Boss!' : 'Choose Next Battle!'}
        </button>
      </div>
    </main>
  );
};
export default WinBattle;

// props.arena.Difficulty.par_time / props.currentBattle.time_seconds