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


function Arena(props) {

  // console.log('RENDERING');

  // States
  const [words, setWords] = useState([]);
  const [playerActions, setPlayerActions] = useState([]);
  const [health, setHealth] = useState({ player: props.initialPlayerHealth, challenger: props.challengerHealth })
  const [playerInput, setPlayerInput] = useState('');
  // Helper functions
  const changeHealth = (fighter, hp) => {
    console.log(`${fighter} DAMAGED! for ${hp} hp`);
    setHealth(prev => {
      const newHealth = { ...prev };
      // Health cannot be deducted past zero or increased past 100
      newHealth[fighter] = Math.min(Math.max(newHealth[fighter] + hp, 0), 100);
      return newHealth;
    });
    if (health[fighter] === 0) {
      console.log(`${fighter} DEFEATED`);
      setTimeout(() => {
        props.setMode("OUTCOME");
        // In the future, we need to also add a state to "Outcome" that determines whether it's a win or loss
      }, 3000);
    }
  };

  // Timings for the challenger's attacks
  const milliseconds = 100;
  const [challengerTimer, setChallengerTimer] = useState(20);

  // Use a useEffect to prevent looping (otherwise, every time interval is set, the re-render causes a second timer to be started, etc.)
  useEffect(() => {
    const interval = setInterval(() => {
      if (challengerTimer == 0) {
        setChallengerTimer(19);
        console.log('CHALLENGER LAUNCHED AN ATTACK');
        // We would eventually put a function for the challenger to attack here
      } else {
        setChallengerTimer(prev => prev - 1);
      }
    }, milliseconds);
    return () => clearInterval(interval);
  }, [challengerTimer]);
  // console.log('playerActions', playerActions);

  // Gets a random word from the words list
  const getRandWord = (words) => words[Math.floor(Math.random() * words.length)];
  // Gets a new word for given action that the player just executed
  const getNewWord = (action) => {
    // update playerAction state with a new word
    // clear text input
    setPlayerActions(prev => {
      console.log('prev', prev)
      return prev.map(actionPrev => {
        console.log('actionprev', actionPrev.name, 'action', action.name)
        if (actionPrev.name === action.name) {
          console.log('action matched')
          return {
            ...actionPrev,
            word: getRandWord(words)
          }
        } else {
          return actionPrev
        }
      });
    });
  };

  const isMatch = (input, actions) => actions.find(action => action.word === input);

  if (isMatch(playerInput, playerActions)) {
    console.log('match found!');
    const action = playerActions.find(action => action.word === playerInput);
    // Get a new word for that action
    console.log('matched action', action)
    getNewWord(action)
    // Clear text area
    setPlayerInput('')
  }

  // Get word list and action list on load
  useEffect(() => {
    axios.defaults.baseURL = 'http://localhost:3001';
    Promise.all([
      axios.get('/api/words'),
      axios.get('/api/playerActions')
    ]).then(data => {
      setWords(data[0].data);
      // setPlayerActions(data[1].data);
      setPlayerActions(prev => {
        // when generating random word check that it doesn't match a word in the actions list
        return data[1].data.map(action => ({ ...action, word: getRandWord(data[0].data) }))
      })

      // console.log('data', data[1].data)
    }).catch(err => console.log("Error getting data: ", err));
  }, []);

  return (
    <>
      <h1>Arena</h1>
      {/* Player */}
      <HealthBar
        health={health.player}
        onClick={() => { changeHealth('player', -10) }}
      />
      <Dummy />
      <Avatar
        name='Your Name'
        height='250px'
        filename='/images/boss-spirit-fighter.png'
      />
      <PlayerActionList
        words={words}
        playerActions={playerActions}
      />
      <TextInput
        value={playerInput}
        onChange={setPlayerInput}
      // playerActions={playerActions}
      // onMatch={getNewWord}
      />
      {/* Challenger */}
      <HealthBar
        health={health.challenger}
        onClick={() => { changeHealth('challenger', -10) }}
      />
      <Avatar
        name='Challenger'
        height='250px'
        filename='/images/boss-dragon-emperor.png'
      />
      <ChallengerActionList
        actions={{
          attack: 'attack-function.jpg',
          timeToAttack: 5
        }}
        duration={milliseconds}
        percentage={challengerTimer / 20 * 100}
      />
    </>
  );
}

export default Arena;