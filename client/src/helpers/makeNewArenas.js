// const arenas = [
//   {
//     name: "Hogwarts",
//     arena_card: "/images/door.jpg",
//     background_image: "/images/door.jpg",
//     background_music: "/sounds/background-music.ogg",
//     beaten: false
//   },
//   {
//     name: "Indigo Plateau",
//     arena_card: "/images/door.jpg",
//     background_image: "/images/door.jpg",
//     background_music: "/sounds/background-music.ogg",
//     beaten: true
//   },
//   {
//     name: "Minas Tirith",
//     arena_card: "/images/door.jpg",
//     background_image: "/images/door.jpg",
//     background_music: "/sounds/background-music.ogg",
//     beaten: false
//   },
//   {
//     name: "Final Destination",
//     arena_card: "/images/door.jpg",
//     background_image: "/images/door.jpg",
//     background_music: "/sounds/background-music.ogg",
//     beaten: false
//   },
//   {
//     name: "Hotel California",
//     arena_card: "/images/door.jpg",
//     background_image: "/images/door.jpg",
//     background_music: "/sounds/background-music.ogg",
//     beaten: true
//   }
// ]

//takes in an array of arenas and the arena that was won and returns a 
//new array of arenas where the won arena's beaten value is true

export function updateToArenaBeat(arenas, arenaWon) {
  let newArenasObj = []
  for (const arena of arenas) {
    if (arena.name === arenaWon) {
      const newArena = {
        ...arena,
        beaten: true
      }
      newArenasObj.push(newArena)
    } else {
      newArenasObj.push(arena)
    }
  }
  return newArenasObj;
}

export function updateToArenaLost(arenas, arenaWon) {
  let newArenasObj = []
  for (const arena of arenas) {
    if (arena.name === arenaWon) {
      const newArena = {
        ...arena,
        lost: true
      }
      newArenasObj.push(newArena)
    } else {
      newArenasObj.push(arena)
    }
  }
  return newArenasObj;
}
// console.log(updateToArenaLost(arenas, "Hogwarts"))