// shifts between each of the game modes: start, map, arena and result

import { useState } from "react";

export default function useGameMode(initial) {

  const [mode, setMode] = useState(initial)

  return { mode, setMode};
}
