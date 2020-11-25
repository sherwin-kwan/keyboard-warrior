// Libraries
import React, { useState, useEffect } from "react";
import axios from 'axios';

// Components
import HealthBar from '../HealthBar';
import Avatar from '../Avatar';
import PlayerActionList from '../PlayerActionList';
import ChallengerActionList from '../ChallengerActionList';
import TextInput from '../TextInput';

// Styles
import './Arena.scss'
//helpers
import updateToArenaBeat from "../../helpers/makeNewArenas";
// Hooks
import useInputMatcher from '../../hooks/useInputMatcher';
import useChallengerAction from '../../hooks/useChallengerAction';

function Arena(props) {

  console.log(props.arena);
  // States
  // const [words, setWords] = useState([]);
  const [playerActions, setPlayerActions] = useState([]);
  const [wordIndex, setWordIndex] = useState([0, 0]); // [Current attack word index, Current heal word index]
  const [health, setHealth] = useState({ player: props.initialPlayerHealth, challenger: props.challengerHealth })
  const [playerInput, setPlayerInput] = useState('');
  const { attackTime, setAttackTime } = useChallengerAction({ attackTime: props.arena.Difficulty.attack_time_ms });
  const { handleWordMatch } = useInputMatcher();
  // Timings for the challenger's attacks
  const [challengerTimer, setChallengerTimer] = useState(20);

  useEffect(() => {
    // console.log('word match?', handleWordMatch(playerInput, playerActions));

    const action = handleWordMatch(playerInput, playerActions);
    // console.log('Action is: ', action);
    // When finished typing a word, action will equal the name of the action it executes
    if (action) {
      // Grab a new word
      console.log('ACTION IS: ', action);
      getNextWord(action);
      // Deal damage
      switch (action.name) {
        case 'attack':
          changeHealth('challenger', -10);
          break;
        case 'heal':
          changeHealth('player', 10);
      };
      // Clear the text box
      setPlayerInput('');
    };
  }, [playerInput]);

  // Helper functions

  const changeHealth = (fighter, hp) => {
    console.log(`${fighter} DAMAGED! for ${hp} hp`);
    setHealth(prev => {
      const newHealth = { ...prev };
      // Health cannot be deducted past zero or increased past 100
      newHealth[fighter] = Math.min(Math.max(newHealth[fighter] + hp, 0), 100);
      return newHealth;
    });
  };

  useEffect(() => {
    if (health.player === 0) {
      props.setResult('LOSEGAME');
      props.setMode("OUTCOME");
      console.log(`PLAYER DEFEATED`);
    } else if (health.challenger === 0) {
      props.setResult('WINBATTLE');
      props.setMode("OUTCOME");
      console.log(`CHALLENGER DEFEATED`);
      props.setArenas(updateToArenaBeat(props.arenas, props.arena.name))
    }
  }, [health])


  // Use a useEffect to prevent looping (otherwise, every time interval is set, the re-render causes a second timer to be started, etc.)
  useEffect(() => {
    const interval = setInterval(() => {
      if (challengerTimer == 0) {
        setChallengerTimer(19);
        console.log('CHALLENGER LAUNCHED AN ATTACK');
        changeHealth('player', -props.arena.Difficulty.damage_per_hit);
        // We would eventually put a function for the challenger to attack here
      } else {
        setChallengerTimer(prev => prev - 1);
      }
    }, attackTime / 20);
    return () => clearInterval(interval);
  }, [challengerTimer, attackTime]);

  // Gets the next word from the randomized list of words
  const getNextWord = (action) => {
    const actionIndex = playerActions.indexOf(action);
    wordIndex[actionIndex]++;
    playerActions[actionIndex].word = playerActions[actionIndex]["words"][wordIndex[actionIndex]];
  }

  // Get word list and action list on load
  useEffect(async () => {
    try {
      axios.defaults.baseURL = 'http://localhost:3001';
      const rawWords = await axios.get(`/api/action-words/${props.arena.id}`);
      const initialWordsState = rawWords.data.map((action, ind) => {
        console.log('Attempting to retrieve words for', ind, playerActions);
        return {...action, word: action.words[0]};
      });
      setPlayerActions(initialWordsState);
    } catch (err) {
      console.log("Error getting data: ", err);
    }
  }, []);

  return (
    <main className="arena" >
      <div className="health">
        <HealthBar
          health={health.player}
          onClick={() => { changeHealth('player', -10) }}
        />
      </div>
      <div className="health">
        <HealthBar
          health={health.challenger}
          onClick={() => { changeHealth('challenger', -10) }}
        />
      </div>
      <div className="avatar player">
        <Avatar
          name='You'
          filename='/images/boss-spirit-fighter.png'
        />
      </div>
      <div className="avatar challenger">
        <Avatar
          name={props.arena.challenger_name}
          filename={props.arena.challenger_sprite}
        />
      </div>
      <div className="player-actions">
        <PlayerActionList
          playerActions={playerActions}
          playerInput={playerInput}
        />
      </div>
      <div className="challenger-actions">
        <div className="buttons">
          <button onClick={() => setAttackTime(1000000000)}>Pause</button>
          <button onClick={() => setAttackTime(20000)}>Slow</button>
          <button onClick={() => setAttackTime(2000)}>Normal</button>
        </div>
        <ChallengerActionList
          // actions={{
          //   timeToAttack: 5
          // }}
          attack='/images/sword.png'
          duration={attackTime / 20}
          percentage={challengerTimer / 20 * 100}
        />
      </div>
      <div className="typing">
        <TextInput
          value={playerInput}
          onChange={setPlayerInput}
        />
      </div>
    </main >
  );
}

export default Arena;