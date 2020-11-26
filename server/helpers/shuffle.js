// Returns a shuffled version of the original array

const shuffle = (arr) => {

  // Base case (array of one element)
  // Copy the element
  if (arr.length < 2) {
    return arr;
  }

  // Recursive case
  const random = Math.floor(Math.random() * arr.length);
  let newArray = arr.splice(random, 1);
  newArray.push(...shuffle(arr));
  return newArray;
}

module.exports = shuffle;