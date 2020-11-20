// Libraries
import React from "react";
import SkillBar from 'react-skillbars';
import './HealthBar.scss';

function HealthBar(props) {
  return (
    <div className="health-bar">
      <img src="/images/red-cross.png" alt="Health" onClick={props.onClick}/>
      <SkillBar animationDelay={0} animationDuration={200} height={40} skills={[{type: 'HEALTH', level: props.initialHealth}]} />
    </div>
  );
}

export default HealthBar;