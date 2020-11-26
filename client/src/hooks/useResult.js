import { useState } from "react";

export default function useOutcome(initial) {
  
  const [result, setResult] = useState(initial);

  return { result, setResult }
}