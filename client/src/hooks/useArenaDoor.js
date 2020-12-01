import { useState } from "react";

export default function useArenaDoor() {

  const [currentDoor, setCurrentDoor] = useState(0);
  
  // Returns true if door is selected
  function handleCurrentDoor(door) {
    if (door === currentDoor) return true;
    return false;
  }

  return { currentDoor, setCurrentDoor, handleCurrentDoor }
}