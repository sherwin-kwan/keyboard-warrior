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

function Arena(props) {

  // States
  const [playerActions, setPlayerActions] = useState([]);
  const [wordIndex, setWordIndex] = useState([0, 0]); // [Current attack word index, Current heal word index]
  const [health, setHealth] = useState({ player: props.initialPlayerHealth, challenger: props.challengerHealth })
  const [playerInput, setPlayerInput] = useState('');
  const { attackTime } = useChallengerAction(props.arena.Difficulty.attack_time_ms);
  const { handleWordMatch } = useInputMatcher();
  // Timings for the challenger's attacks
  const [challengerTimer, setChallengerTimer] = useState(20);
  const { startBattle, endBattle, style, handleAttackAnimation, currentBattle, setCurrentBattle } = props;


  // On first load
  useEffect(() => {
    async function getWords() {
      // Start battle timer
      setCurrentBattle(startBattle(props.game.id, props.arena.id));
      // Get word list and action list
      try {
        const rawWords = await axios.get(`/api/action-words/${props.arena.id}`);
        console.log('Current battle is: ', currentBattle);
        const initialWordsState = rawWords.data.map((action, ind) => {
          return { ...action, word: action.words[0] };
        });
        setPlayerActions(initialWordsState);
      } catch (err) {
        console.log("Error getting data: ", err);
      };
    }
    getWords();
  }, [props.arena.id]);


  // Handles player attack
  useEffect(() => {

    const action = handleWordMatch(playerInput, playerActions);
    // When finished typing a word, action will equal the name of the action it executes
    let animationTimer;
    if (action) {
      // Show action animation
      animationTimer = handleAttackAnimation('player', action.name);
      // Grab a new word
      getNextWord(action);
      // Deal damage
      switch (action.name) {
        case 'attack':
          changeHealth('challenger', -10);
          break;
        case 'heal':
          changeHealth('player', 20);
          break;
        default:
      };
      // Clear the text box
      setPlayerInput('');
    }
    return () => clearTimeout(animationTimer);
  }, [playerInput]);


  // Handles Challenger Attack
  // Use a useEffect to prevent looping (otherwise, every time interval is set, the re-render causes a second timer to be started, etc.)
  useEffect(() => {
    const interval = setInterval(() => {
      if (challengerTimer === 0) {
        // Show attack animation
        handleAttackAnimation('challenger');
        setChallengerTimer(19);
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
    // Get next word or restart from beginning of word list
    (wordIndex[actionIndex] === action.words.length - 1) ? wordIndex[actionIndex] = 0 : wordIndex[actionIndex]++;
    playerActions[actionIndex].word = playerActions[actionIndex]["words"][wordIndex[actionIndex]];
  }

  // Change health after an attack

  const changeHealth = (fighter, hp) => {
    setHealth(prev => {
      const newHealth = { ...prev };
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

  // End of battle

  async function handleBattleOver() {
    if (health.player === 0) {
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
      props.setMode("TRANSITION");
      console.log('current battle is: ', currentBattle);
      const returnedBattle = await endBattle(false, currentBattle);
      setCurrentBattle(returnedBattle);
      props.setMode("OUTCOME");
    } else if (health.challenger === 0) {
      if (props.arena.name === "Boss") {
        props.setOutcome('WINGAME');
      } else {
        if (countArenasBeaten(props.arenas) >= 4) {
          props.setOutcome('WINALLARENAS');
          props.setMode("OUTCOME");
        } else {
          props.setOutcome('WINBATTLE');
          props.setArenas(updateToArenaCompleted(props.arenas, props.arena.name, true))
        }
      }
      props.setMode("TRANSITION");
      console.log('current battle is: ', currentBattle);
      const returnedBattle = await endBattle(true, currentBattle);
      setCurrentBattle(returnedBattle);
      props.setMode("OUTCOME");
    }
  };

  useEffect(() => {
    handleBattleOver();
  }, [health])


  return (
    <main className="arena" >
      <div className="window">
        <div className="window-bar">
          <span className="dot close"></span>
          <span className="dot minimize"></span>
          <span className="dot maximize"></span>
          <span className="window-title">{props.arena.name}</span>
        </div>
        <div className="window-content">
          <div className="health-bar" data-cy="health-bar">
            <HealthBar
              health={health.player}
              onClick={() => { changeHealth('player', -10) }}
            />
          </div>
          <div className="health-bar" data-cy="health-bar">
            <HealthBar
              health={health.challenger}
              onClick={() => { changeHealth('challenger', -10) }}
            />
          </div>
          <div className="avatar player">
            <Avatar
              name={props.game.player_name || 'Player'}
              filename='/images/boss-spirit-fighter.png'
            />
            <img
              className="action player"
              src="/images/player-attack.png"
              alt="Player attacks"
              style={style.player.attack}
            />
            <img
              className="action player"
              src="/images/player-heal.png"
              alt="Player heals"
              style={style.player.heal}
            />
          </div>
          <div className="avatar challenger">
            <Avatar
              name={props.arena.challenger_name}
              filename={props.arena.challenger_sprite}
            />
            <img
              className="action challenger"
              src="/images/challenger-attack.png"
              alt="Challenger attacks"
              style={style.challenger}
            />
          </div>
          <div className="player-actions" data-cy="player-actions">
            <PlayerActionList
              playerActions={playerActions}
              playerInput={playerInput}
            />
          </div>
          <div className="challenger-actions">
            {/* <div className="buttons">
              <button onClick={() => setAttackTime(1000000000)}>Pause</button>
              <button onClick={() => setAttackTime(20000)}>Slow</button>
              <button onClick={() => setAttackTime(2000)}>Normal</button>
            </div> */}
            <ChallengerActionList
              // actions={{
              //   timeToAttack: 5
              // }}
              attack='/images/sword.png'
              duration={attackTime / 20}
              percentage={challengerTimer / 20 * 100}
            />
          </div>
          <div className="typing" data-cy="type-here">
            <TextInput
              value={playerInput}
              onChange={setPlayerInput}
            />
          </div>
        </div>

      </div>
    </main >
  );
}

export default Arena;