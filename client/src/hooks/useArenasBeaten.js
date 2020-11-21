import { useState} from "react";

export default function useArenasBeaten() {

  const [ arenasBeaten, setArenasBeaten ] = useState(0);

  return { arenasBeaten, setArenasBeaten}
}