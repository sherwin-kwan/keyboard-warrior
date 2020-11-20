// Libraries
import React from "react";
import SkillBar from 'react-skillbars';
import Avatar from './Avatar';

function ProgressBar(props) {
  return (
    <>
      <h1>Progress Bar</h1>
      {/* Just a placeholder for now, the real progress bar will have dots or notches and look more fancy! */}
      <div class="progress-bar">
        <Avatar
        height='50px'
        filename={props.playerImg} />
        <SkillBar 
          animationDelay={0} 
          animationDuration={100} 
          skills={[{
          type: 'Arenas Beaten',
          level: props.arenasBeaten / 5 * 100
        }]}/>
        <Avatar
        height='50px'
        filename={props.bossImg} />
      </div>
    </>
  );
}

export default ProgressBar;