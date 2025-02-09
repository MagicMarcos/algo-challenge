/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

function reverseString(text) {
  // return text.split('').reverse().join('')
  if (text === '') {
    return '';
  } else {
    return reverseString(text.substr(1)) + text[0];
  }
}

module.exports = reverseString;
