

//takes in an array of arenas and the arena that was completed, plus a boolean of whether arena was won or lost and returns a 
//new array of arenas where the won arena's beaten value is true or false

export default function updateToArenaCompleted(arenas, arenaCompleted, winLose) {
  let newArenasObj = []
  for (const arena of arenas) {
    if (arena.name === arenaCompleted && winLose) {
      const newArenaTrue = {
        ...arena,
        beaten: true
      }
      newArenasObj.push(newArenaTrue)
    } else if (arena.name === arenaCompleted && !winLose) {
      const newArenaFalse = {
        ...arena,
        beaten: false
      }
      newArenasObj.push(newArenaFalse)
    } else {
      newArenasObj.push(arena)
    }
  }
  return newArenasObj;
}
