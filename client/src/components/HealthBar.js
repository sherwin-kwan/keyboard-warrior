// Libraries
import React from "react";
import SkillBar from 'react-skillbars';
import './HealthBar.scss';

function HealthBar(props) {
  return (
    <div class="health-bar">
      <img src="/images/red-cross.png" alt="Health" />
      <SkillBar animationDelay={0} animationDuration={100} skills={[{level: props.initialHealth}]} />
    </div>
  );
}

export default HealthBar;