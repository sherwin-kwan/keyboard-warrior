import { useState } from "react";

export default function useMusic() {

  const [ music, setMusic ] = useState("ON")

  return { music, setMusic }
}
