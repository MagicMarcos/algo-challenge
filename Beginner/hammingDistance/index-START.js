/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/

function hammingDistance(stringA = '', stringB = '') {
  if (stringA.length !== stringB.length) {
    return 0;
  }
  let dist = 0;
  for (let i = 0; i < stringA.length; i += 1) {
    if (stringA[i] !== stringB[i]) {
      dist += 1;
    }
  }
  return dist;
}

module.exports = hammingDistance;
