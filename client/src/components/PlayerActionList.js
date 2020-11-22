// Libraries
import React from "react";

// Style
import '../styles/PlayerActionList.scss';

// Components
import PlayerAction from './PlayerAction';

function PlayerActionList(props) {
  const match = props.matchingLetters;
  // Create word and add class if the letters match
  if (match) {
    console.log('match!', match)
    // initialize wordDom as empty array
    props.playerActions.forEach(action => {
      // { name: 'x', word: 'x' }
      // console.log('action', action.word)
      // const wordDOM = action.word
      //   .split("")
      //   .map((char, index) => {
      //     return (char === match[index]) ? `<span class="match">${char}</span>` : char;
      //   }).join('');
      let wordDOM = [];
      let continueMatch = true;
      for (let i = 0; i < action.word.length; i++) {
        if (match[i] === action.word[i] && continueMatch) {
          wordDOM.push(`<span class="match">${action.word[i]}</span>`);
        } else {
          continueMatch = false;
          wordDOM.push(action.word[i]);
        }
      }
      // console.log('wordDOM', wordDOM)
      action.wordDOM = wordDOM.join('');
    })
    // loop through each playerAction
    // loop through each letter in action.word
    // if the letter matches the match, then create a span with class match otherwise just add the letter
    // add the wordDom to the props action.wordDom
  }

  const actions = props.playerActions.map(action => {
    console.log(action.wordDOM || action.word)    
    return (
      <PlayerAction
        key={action.name}
        name={action.name}
        word={action.wordDOM || action.word}
      />
    )
  });
    
  return (
    <div class="action-list">
      <h1>PlayerActionList</h1>
        <ul>
          {actions}
        </ul>
    </div>
  )
}

export default PlayerActionList;