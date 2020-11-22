// Libraries
import React, { useState, useEffect } from "react";
import axios from 'axios';

// Components
import HealthBar from '../HealthBar';
import Avatar from '../Avatar';
import PlayerActionList from '../PlayerActionList';
import ChallengerActionList from '../ChallengerActionList';
import TextInput from '../TextInput';
import Dummy from '../Dummy';

// Styles
import './Arena.scss'
//helpers
import updateToArenaBeat from "../../helpers/makeNewArenas";
// Hooks
import useInputMatcher from '../../hooks/useInputMatcher';
import useChallengerAction from '../../hooks/useChallengerAction';

function Arena(props) {

  // console.log('RENDERING');

  // States
  const [words, setWords] = useState([]);
  const [playerActions, setPlayerActions] = useState([]);
  const [health, setHealth] = useState({ player: props.initialPlayerHealth, challenger: props.challengerHealth })
  const [playerInput, setPlayerInput] = useState('');
  const { attackTime, setAttackTime } = useChallengerAction({attackTime: 2000});
  const { handleWordMatch } = useInputMatcher();

  // const [match, setMatch] = useState('');
  useEffect(() => {
    console.log('word match?', handleWordMatch(playerInput, playerActions));

    const action = handleWordMatch(playerInput, playerActions);
    // console.log('Action is: ', action);
    // When finished typing a word, action will equal the name of the action it executes
    if (action) {
      // Grab a new word
      getNewWord(action);
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

  // Timings for the challenger's attacks
  const milliseconds = attackTime / 20;
  const [challengerTimer, setChallengerTimer] = useState(20);

  // Use a useEffect to prevent looping (otherwise, every time interval is set, the re-render causes a second timer to be started, etc.)
  useEffect(() => {
    const interval = setInterval(() => {
      if (challengerTimer == 0) {
        setChallengerTimer(19);
        console.log('CHALLENGER LAUNCHED AN ATTACK');
        changeHealth('player', -10);
        // We would eventually put a function for the challenger to attack here
      } else {
        setChallengerTimer(prev => prev - 1);
      }
    }, milliseconds);
    return () => clearInterval(interval);
  }, [challengerTimer]);

  // Gets a random word from a words list
  const getRandWord = (action, words) => {
    const wordsForAction = words.filter(word => word.action === action);
    const randWord = wordsForAction[Math.floor(Math.random() * wordsForAction.length)];
    return randWord.word;
  }
  // Returns true if player input matches an action word
  // const isMatch = (input, actions) => actions.find(action => action.word === input);

  // Gets and sets a new word for the given action that the player just executed
  const getNewWord = (action) => {
    setPlayerActions(prev => {
      return prev.map(actionPrev => {
        if (actionPrev.name === action.name) {
          return { ...actionPrev, word: getRandWord(action.name, words) };
        } else {
          return actionPrev;
        }
      });
    });
  };

  // Get word list and action list on load
  useEffect(() => {
    axios.defaults.baseURL = 'http://localhost:3001';
    Promise.all([
      axios.get('/api/words'),
      axios.get('/api/playerActions')
    ]).then(data => {
      setWords(data[0].data);
      setPlayerActions(prev => {
        return data[1].data.map(action => ({ ...action, word: getRandWord(action.name, data[0].data) }))
      });
    }).catch(err => console.log("Error getting data: ", err));
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
      <div className="player">
        <Dummy />
        <Avatar
          name='Your Name'
          height='250px'
          filename='/images/boss-spirit-fighter.png'
        />
      </div>
      <div className="challenger">
        <Avatar
          name='Challenger'
          height='250px'
          filename='/images/boss-dragon-emperor.png'
        />
      </div>
      <div className="player-action">
        <PlayerActionList
          playerActions={playerActions}
          playerInput={playerInput}
        />
      </div>
      <div className="challenger-action">
        <div className="buttons">
          <button onClick={setAttackTime(1000000000)}>Pause</button>
          <button onClick={setAttackTime(20000)}>Slow</button>
          <button onClick={setAttackTime(2000)}>Normal</button>
        </div>
        <ChallengerActionList
          actions={{
            attack: 'attack-function.jpg',
            timeToAttack: 5
          }}
          duration={milliseconds}
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