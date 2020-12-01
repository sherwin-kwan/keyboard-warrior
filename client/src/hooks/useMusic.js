import { useState } from "react";

export default function useMusic() {

  const [ music, setMusic ] = useState(true)

  return { music, setMusic }
}
