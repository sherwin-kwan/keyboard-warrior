import { useState } from "react";

export default function useOutcome(initial) {
  
  const [outcome, setOutcome] = useState(initial);

  return { outcome, setOutcome }
}