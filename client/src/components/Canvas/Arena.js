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
import '../../styles/Arena.scss';

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
  const milliseconds = 100000;
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
  const isMatch = (input, actions) => actions.find(action => action.word === input);
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

  // Check if player input matches an action words
  if (isMatch(playerInput, playerActions)) {
    const action = playerActions.find(action => action.word === playerInput);
    // Get a new word for that action
    console.log('matched action', action)
    getNewWord(action)
    // Execute the attack or heal action
    switch (action.name) {
      case 'attack':
        changeHealth('challenger', -10);
        break;
      case 'heal':
        changeHealth('player', 10);
    };
    // Clear text area
    setPlayerInput('')
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
        playerActions={playerActions}
      />
      <TextInput
        value={playerInput}
        onChange={setPlayerInput}
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