

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
