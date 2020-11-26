// const arenas = [
//   {
//     name: "Hogwarts",
//     arena_card: "/images/door.jpg",
//     background_image: "/images/door.jpg",
//     background_music: "/sounds/background-music.ogg",
//     beaten: false,
//     lost: false
//   },
//   {
//     name: "Indigo Plateau",
//     arena_card: "/images/door.jpg",
//     background_image: "/images/door.jpg",
//     background_music: "/sounds/background-music.ogg",
//     beaten: true,
//     lost: true
//   },
//   {
//     name: "Minas Tirith",
//     arena_card: "/images/door.jpg",
//     background_image: "/images/door.jpg",
//     background_music: "/sounds/background-music.ogg",
//     beaten: false,
//     lost: false
//   },
//   {
//     name: "Final Destination",
//     arena_card: "/images/door.jpg",
//     background_image: "/images/door.jpg",
//     background_music: "/sounds/background-music.ogg",
//     beaten: false,
//     lost: true
//   },
//   {
//     name: "Hotel California",
//     arena_card: "/images/door.jpg",
//     background_image: "/images/door.jpg",
//     background_music: "/sounds/background-music.ogg",
//     beaten: true,
//     lost: false
//   }
// ]

export function countArenasLost(arenas) {
  let count = 0;
  for (const arena of arenas) {
    if (arena.lost) {
      count +=1;
    }
  }
  return count;
};

export function countArenasBeaten(arenas) {
  let count = 0;
  for (const arena of arenas) {
    if (arena.beaten) {
      count +=1;
    }
  }
  return count;
};

// console.log(countArenasLost(arenas))