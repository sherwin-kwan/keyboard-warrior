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
import updateToArenaCompleted from "../../helpers/makeNewArenas";
import { countArenasLost, countArenasBeaten } from "../../helpers/countArenasCompleted";

// Hooks
import useInputMatcher from '../../hooks/useInputMatcher';
import useChallengerAction from '../../hooks/useChallengerAction';
import useBattles from '../../hooks/useBattles';

function Arena(props) {

  // console.log(props.arena);
  // States
  // const [words, setWords] = useState([]);
  const [playerActions, setPlayerActions] = useState([]);
  const [wordIndex, setWordIndex] = useState([0, 0]); // [Current attack word index, Current heal word index]
  const [health, setHealth] = useState({ player: props.initialPlayerHealth, challenger: props.challengerHealth })
  const [playerInput, setPlayerInput] = useState('');
  const { attackTime, setAttackTime } = useChallengerAction(props.arena.Difficulty.attack_time_ms);
  const { handleWordMatch } = useInputMatcher();
  // Timings for the challenger's attacks
  const [challengerTimer, setChallengerTimer] = useState(20);
  const { startBattle, endBattle } = useBattles();

  useEffect(() => {
    // console.log('word match?', handleWordMatch(playerInput, playerActions));

    const action = handleWordMatch(playerInput, playerActions);
    // console.log('Action is: ', action);
    // When finished typing a word, action will equal the name of the action it executes
    if (action) {
      // Grab a new word
      // console.log('ACTION IS: ', action);
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
    // console.log(`${fighter} DAMAGED! for ${hp} hp`);
    setHealth(prev => {
      const newHealth = { ...prev };
      // Health cannot be deducted past zero or increased past 100
      newHealth[fighter] = Math.min(Math.max(newHealth[fighter] + hp, 0), 100);
      return newHealth;
    });
  };
  
  /*
  1. health.player === 0 && !MORETHAN 3 ARENAS LOST => LOSE THE BATTLE => DEFEAT SCREEN THAT LINKS BACK TO MAP
  2. health.player === 0 && MORE THAN 3 ARENAS LOST => LOSE THE GAME, BUT NOT TO THE BOSS => DEFEAT SCREEN WITH RIDICULE THAT LINKS BACK TO THE START SCREEN (AND CLEAR THE GAME STATE)
  3. health.player === 0 && CHALLENGER/ARENA === BOSS => LOST THE GAME, AGAINST THE BOSS => DEFEAT SCREEN WITH CONDOLENCES THAT LINKS BACK TO THE START SCREEN (AND CLEAR ALL STATE)
  4. health.challenger === 0 && !CHALLENGER/ARENA === BOSS => WIN THE BATTLE, BUT NOT THE FINAL BATTLE => VICTORY SCREEN THAT LINKS BACK TO THE MAP
  5. health.challenger === 0 && !CHALLENGER/ARENA === BOSS && ARENAS BEATEN === 5 => WIN THE FINAL BATTLE BEFORE THE BOSS => VICTORY SCREEN THAT LINKS BACK TO ARENA WITH BOSS (SET CHALLENGER TO BOSS)
  6. health.challenger === 0 && CHALLENGER/ARENA === BOSS => WIN THE GAME, INCLUDING BOSS => VICTORY SCREEN WITH YOUR NAME ON THE LEADERBOARD & FIREWORKS, LINKS BACK TO THE START SCREEN (AND CLEAR ALL STATE)
  
  SCREENS:
  1. LoseBattle.js - EXISTS
  2. LoseGameNotBoss.js - CREATE
  3. LoseGameToBoss.js - CREATE
  4. WinBattle.js  - EXISTS
  5. WinAllArenas.js - CREATE
  6. WinGame.js  - EXISTS
  
  */
  
  useEffect(() => {

    if (health.player === 0) {
      props.setMode("OUTCOME");
      endBattle(false);
      if (props.arena.name === "Boss") {
        props.setOutcome('LOSEGAMETOBOSS');
      } else {
        if (countArenasLost(props.arenas) >= 2) {
          props.setOutcome('LOSEGAMENOTBOSS');
        } else {
          props.setOutcome('LOSEBATTLE');
          props.setArenas(updateToArenaCompleted(props.arenas, props.arena.name, false))
        }
      }
    } else if (health.challenger === 0) {
      endBattle(true);
      props.setMode("OUTCOME");
      if (props.arena.name === "Boss") {
        props.setOutcome('WINGAME');
      } else {
        if (countArenasBeaten(props.arenas) >= 4 ) {
          console.log('won more than 4 arenas, go to boss!')
          props.setOutcome('WINALLARENAS');
          props.setMode("OUTCOME");
        } else {
          props.setOutcome('WINBATTLE');
          props.setArenas(updateToArenaCompleted(props.arenas, props.arena.name, true))
        }
      }
    }
  }, [health])


  // Use a useEffect to prevent looping (otherwise, every time interval is set, the re-render causes a second timer to be started, etc.)
  useEffect(() => {
    const interval = setInterval(() => {
      if (challengerTimer == 0) {
        setChallengerTimer(19);
        // console.log('CHALLENGER LAUNCHED AN ATTACK');
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

  // On first load
  useEffect(async () => {
    // Start battle timer
    startBattle(props.game.id, props.arena.id);
    // Get word list and action list
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