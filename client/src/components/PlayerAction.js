// Libraries
import React from "react";

function PlayerAction(props) {
  return (
    <li>
      <div class="action-icon">{props.name}</div>
      <div class="action-word">{props.word}</div>
    </li>
  );
}

export default PlayerAction;