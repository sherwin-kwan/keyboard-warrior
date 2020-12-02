import React from 'react';
import ScoreTable from '../../ScoreTable';

const WinBattle = (props) => {
  
  // Ensuring that user goes to boss arena after they have won 5 battles
  if (props.allArenas) {
    console.log('All arenas beaten!');
    props.setArena(props.cleanArenas.find(arena => arena.name === 'Boss'));
  }

  return (
    <main className="outcome win-battle">
      <div className="message">
        <h1>VICTORY</h1>
        <p>Congrats, you have triumphed over {props.arena.challenger_name} in {props.arena.name}!</p>
        {props.allArenas && <p>You beat 5 levels! That means you now enter the arena with the boss. Win this fight and you win the game. Good luck!</p>}
        <ScoreTable result={props.resultProps} />
        <p>{props.allArenas ? 'Heading into the final fight, you have' : 'You now have'} a total of {props.score} points.</p>
        {/* Note: Since arena has been set to boss arena already in the Outcome/index.js page, this will send player to boss arena or to map */}
        <button className="primary" onClick={() => props.allArenas ? props.setMode('ARENA') : props.setMode('MAP')}>
          {props.allArenas ? 'Continue To Boss!' : 'Choose Next Battle!'}
        </button>
      </div>
    </main>
  );
};
export default WinBattle;

// props.arena.Difficulty.par_time / props.currentBattle.time_seconds