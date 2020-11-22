// controls the challenger's state
// makes an axios request to challengers to get the name, health, attack time etc

// shifts between each of the game modes: start, map, arena and result

import { useState } from "react";

export default function useChallengerAction(initial) {

  const [attackTime, setAttackTime] = useState(initial['attackTime']);

  return { attackTime, setAttackTime};
}
