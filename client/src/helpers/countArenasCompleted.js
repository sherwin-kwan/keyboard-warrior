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
//     background_music: "/sounds/background-music.ogg"
//   },
//   {
//     name: "Final Destination",
//     arena_card: "/images/door.jpg",
//     background_image: "/images/door.jpg",
//     background_music: "/sounds/background-music.ogg",
//   },
//   {
//     name: "Hotel California",
//     arena_card: "/images/door.jpg",
//     background_image: "/images/door.jpg",
//     background_music: "/sounds/background-music.ogg",
//   }
// ]

export function countArenasLost(arenas) {
  let count = 0;
  for (const arena of arenas) {
    if (arena.beaten === false) {
      count +=1;
    }
  }
  return count;
};

export function countArenasBeaten(arenas) {
  let count = 0;
  for (const arena of arenas) {
    if (arena.beaten === true) {
      count +=1;
    }
  }
  return count;
};
