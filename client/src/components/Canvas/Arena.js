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

function Arena(props) {

  // console.log('RENDERING');

  // States
  const [words, setWords] = useState([]);
  const [playerActions, setPlayerActions] = useState([]);
  const [health, setHealth] = useState({ player: props.initialPlayerHealth, challenger: props.challengerHealth })
  const [playerInput, setPlayerInput] = useState('');

  const { handleWordMatch, handleLetterMatch } = useInputMatcher();

  const [match, setMatch] = useState('');
  useEffect(() => {
    console.log('word match?', handleWordMatch(playerInput, playerActions));
    console.log('letter match?', handleLetterMatch(playerInput, playerActions));

    if (handleLetterMatch(playerInput, playerActions)) {
      const action = handleWordMatch(playerInput, playerActions);
      console.log('Action is: ', action);
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
        // Blank the text box
        setPlayerInput('');
      };

    };
  }, [playerInput]);

  // // Checking text input for matching letters
  // useEffect(() =>{
  //   const inputLen = playerInput.length;
  //   const maxWordLen = (playerActions.length !== 0) ? Math.max(...playerActions.map(action => action.word.length)) : 0;
  //   const actionWords = playerActions.map(action => action.word || '')
  //   const actionWordSlices = actionWords.map(word => word.slice(0, inputLen));

  //   // Check for match if player is shorter or equal to max word length
  //   if (inputLen > 0 && inputLen <= maxWordLen) {
  //     // If letter match found
  //     if (inputLen > 0 && actionWordSlices.includes(playerInput)) {
  //       // Pass down matching letters
  //       setMatch(playerInput);
  //       // If word match found
  //       if (actionWords.includes(playerInput)) {
  //         const action = playerActions.find(action => action.word === playerInput);
  //         // Get a new word for that action
  //         getNewWord(action)

  //         // Clear text area
  //         setPlayerInput('');
  //       }
  //     } else {
  //       setMatch('');
  //     }
  //   }
  // }, [playerInput, playerActions]);


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
    }
  };

  useEffect(() => {
    if (health.player === 0) {
      props.setMode("OUTCOME");
      console.log(`PLAYER DEFEATED`);
    } else if (health.challenger === 0) {
      console.log(`CHALLENGER DEFEATED`);
      props.setMode("OUTCOME");
      props.setArenas(updateToArenaBeat(props.arenas, props.arena.name))
    }
  }, [health])

  // Timings for the challenger's attacks
  const milliseconds = 1000;
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
  // if (isMatch(playerInput, playerActions)) {
  //   const action = playerActions.find(action => action.word === playerInput);
  //   // Get a new word for that action
  //   console.log('matched action', action);
  //   getNewWord(action);
  //   // Execute the attack or heal action
  //   switch (action.name) {
  //     case 'attack':
  //       changeHealth('challenger', -10);
  //       break;
  //     case 'heal':
  //       changeHealth('player', 10);
  //   };
  //   // Clear text area
  //   setPlayerInput('')
  // };


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
        />
      </div>
      <div className="challenger-action">
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