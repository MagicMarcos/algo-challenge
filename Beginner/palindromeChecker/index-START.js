/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/

function palindromeChecker(x) {
  let originalStr = x.toLowerCase();
  let pali = x.split('').reverse().join('').toLowerCase();
  if (pali === originalStr) {
    return true;
  } else {
    return false;
  }
}

module.exports = palindromeChecker;
