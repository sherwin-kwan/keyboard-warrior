import { useState, useEffect } from "react";

export default function useArenaDoor() {

  const [currentDoor, setCurrentDoor] = useState('indigo-plateau');
  
  // Returns true if door is selected
  function handleCurrentDoor(door) {
    if (door === currentDoor) return true;
    return false;
  }

  return { setCurrentDoor, handleCurrentDoor }
}