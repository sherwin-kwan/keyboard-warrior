// Libraries
import React from "react";
import SkillBar from 'react-skillbars';

// Components
import ChallengerAction from './ChallengerAction';

function ChallengerActionList(props) {
  // Sets the time until the next challenger attack in tenths of a second
  // Hard-coded to 2 seconds between attacks right now

  const timerBarStyles = {
    position: 'absolute',
    height: 'inherit',
    left: '0px',
    width: props.percentage + '%', /* CSS transitions will be applied using states to change the width of the bar */
    'background-color': 'red',
    'transition-property': 'width',
    'transition-duration': props.duration + 'ms',
    'transition-timing-function': 'linear'
  };

  return (
    <>
      {/* This value would be passed from the state?? Or through a setInterval of some kind to update 50 times a second? */}
      <img src={props.attack} />
      <div className="bar-container"> {/* Creates the timer bar */}
        <div className="timer-bar" style={timerBarStyles}> {/* Creates the animating portion of timer bar, uses CSS transitions */}
        </div>
      </div>
    </>
  );
}

export default ChallengerActionList;