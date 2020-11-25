// records battles completed

import { useState } from "react";

export default function useBattles() {

  const [battles, setBattles] = useState({})

  return { battles, setBattles};
}
