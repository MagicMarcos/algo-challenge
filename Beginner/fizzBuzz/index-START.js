/*
    Write a program that prints the numbers from 1 to n. But for 
    multiples of three print “Fizz” instead of the number and for 
    the multiples of five print “Buzz”. For numbers which are 
    multiples of both three and five print “FizzBuzz”.
*/

function fizzBuzz(n) {
  let result = [];

  for (let i = 1; i <= n; i++) {
    let temp = '';

    if (i % 3 === 0) temp += 'Fizz';
    if (i % 5 === 0) temp += 'Buzz';

    result.push(temp.length === 0 ? i : temp);
  }
  return result;
}

module.exports = fizzBuzz;
