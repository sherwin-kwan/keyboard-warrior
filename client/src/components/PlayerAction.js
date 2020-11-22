// Libraries
import React from "react";

function PlayerAction(props) {
  return (
    <li>
      <div class="action-icon">{props.name}</div>
      {/* <span class="action-word">{props.word}</span> */}
      <div class="action-word" dangerouslySetInnerHTML={{ __html: props.word }} />
    </li>
  );
}

export default PlayerAction;