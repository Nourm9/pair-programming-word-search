const transpose = function (matrix) {
  let transposedArray = [];
  for (let i = 0; i < matrix[0].length; i++) {
    transposedArray.push([]);
  }
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[row].length; column++) {
      transposedArray[column][row] = matrix[row][column];
    }
  }
  return transposedArray;
};
w

const wordSearch = (letters, word) => {
  // joins all arrays ...a sub-array of ["A","P","P"] will for ["APP"]
  const horizontalJoin = letters.map((ls) => ls.join(""));

  // joins all arrays verticall by index (ie all at [0], then all [1] of each sub-array,etc )
  // also uses the transpose function to join word vertically
  const verticalJoin = transpose(letters).map((ls) => ls.join(""));

  for (l of verticalJoin) { // loops through new vertically joined array
    if (l.includes(word)) {
      return true;
    } else {
      for (l of horizontalJoin) { // sub-loops through horizontally joiend array
        if (l.includes(word)) {
          return true;
        }
      }
    }
  }
  return false;
};

module.exports = wordSearch;
