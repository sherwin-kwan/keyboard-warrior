// Libraries
import React from "react";

// Components
import Leaderboard from '../Leaderboard';

// Styles
import './StartGame.scss';

// Hooks
import useLeaders from '../../hooks/useLeaders';

function StartGame(props) {

  // Disables Start Game button if empty player name
  const isDisabled = () => Object.keys(props.game).length === 0 || props.game.player_name.length === 0;

  // Destructure helpers
  const { leaders, getLeaders, leadersShow, setLeadersShow } = useLeaders();

  const toggleLeaderBoard = async () => {
    if (leadersShow) {
      setLeadersShow(false);
    } else {
      await getLeaders();
      setLeadersShow(true);
    }
  };

  return (
    <main className="start-game">
      <h1>Keyboard Warrior</h1>
      <menu>
        <form onSubmit={(event) => {
          event.preventDefault();
          props.onSubmit(props.game.player_name, props.setMode);
          }
          }>
          <label htmlFor="name">Player Name<span>*</span></label><br/>
          <input 
            onChange={(event) => props.setGame({player_name: event.target.value})}
            value={props.game.player_name || ''}
            type="text" 
            id="name" 
            placeholder="Enter player name" 
            name="name"
            data-cy="enter-name"
            required
          /><br />
          <input
            className="primary"
            type="submit"
            value="Start Game"
            disabled={isDisabled()}
          />
        </form>
        <button className="primary" onClick={() => props.setMode("CREDITS")}>Credits</button>
        <button className="primary" onClick={() => props.setMode("INSTRUCTIONS")}>Instructions</button>
        <button className="primary" onClick={toggleLeaderBoard}>{leadersShow ? 'Hide Leaderboard' : 'Show Leaderboard'}</button>
        {leadersShow && <Leaderboard leaders={leaders} />}
      </menu>
    </main>
  );
}

export default StartGame;