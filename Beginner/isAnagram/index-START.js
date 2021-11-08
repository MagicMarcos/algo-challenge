/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/

function isAnagram(stringA, stringB) {
  let len1 = stringA.length;
  let len2 = stringB.length;
  if (len1 !== len2) {
    console.log('Invalid Input');
    return;
  }
  let str1 = stringA.split('').sort().join('');
  let str2 = stringB.split('').sort().join('');
  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
}

module.exports = isAnagram;
