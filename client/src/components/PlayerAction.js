// Libraries
import React from "react";

function PlayerAction(props) {
  return (
    <li>
      <span class="action-icon">{props.name}</span>
      <span class="action-word">{props.word}</span>
    </li>
  );
}

export default PlayerAction;