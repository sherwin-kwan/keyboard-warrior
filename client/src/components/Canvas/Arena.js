// Libraries
import React, { useState, useEffect } from "react";
import axios from 'axios';

// Components
import HealthBar from '../HealthBar';
import Avatar from '../Avatar';
import PlayerActionList from '../PlayerActionList';
import ChallengerActionList from '../ChallengerActionList';
import TextInput from '../TextInput';


function Arena(props) {
  // States
  const [words, setWords] = useState([]);
  const [playerActions, setPlayerActions] = useState([]);

  const [playerInput, setPlayerInput] = useState('');
  
  // Helper functions
  // Gets a random word from the words list
  const getRandWord = (words) => words[Math.floor(Math.random() * words.length)];
  // Gets a new word for given action that the player just executed
  const getNewWord = (action) => {
    setPlayerActions(prev => {
      console.log('prev', prev)
      return prev.map(actionPrev => {
        console.log('actionprev', actionPrev.name, 'action', action.name)
        if(actionPrev.name === action.name) {
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
        return data[1].data.map(action => ({ ...action, word: getRandWord(data[0].data)}))
      })

      // console.log('data', data[1].data)
    }).catch(err => console.log("Error getting data: ", err));
  }, []);

  return (
    <>
      <h1>Arena</h1>
      {/* Player */}
      <HealthBar
        initialHealth="80"
      />
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
        initialHealth="100"
      />
      <Avatar
        name='Challenger'
        height='250px'
        filename='/images/boss-dragon-emporer.png'
      />
      <ChallengerActionList
        actions={{ 
          attack: 'attack-function.jpg',
          timeToAttack: 5
        }}
      />
    </>
  );
}

export default Arena;