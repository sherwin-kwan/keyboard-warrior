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
    backgroundColor: 'red',
    transitionProperty: 'width',
    transitionDuration: props.duration + 'ms',
    transitionTimingFunction: 'linear'
  };

  return (
    <div className="challenger-actions">
      {/* This value would be passed from the state?? Or through a setInterval of some kind to update 50 times a second? */}
      <p>NEXT ATTACK</p>
      <div className="bar-container"> {/* Creates the timer bar */}
        <div className="timer-bar" style={timerBarStyles}> {/* Creates the animating portion of timer bar, uses CSS transitions */}
        </div>
      </div>
    </div>
  );
}

export default ChallengerActionList;