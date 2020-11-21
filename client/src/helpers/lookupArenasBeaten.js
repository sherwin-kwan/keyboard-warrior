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

export default function countArenasBeaten(arenas) {
  let count = 0;
  for (const arena of arenas) {
    if (arena.beaten) {
      count +=1;
    }
  }
  return count;
};
