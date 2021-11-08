/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

function maxRecurringChar(text) {
  let newWord = text.split('');
  let set = new Set(newWord);
}

module.exports = maxRecurringChar;
