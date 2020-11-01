// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

let multiplier = null;
let factor = null;
let multiplicationContainer = null;

let palindromeContainer = null;

let result = null;

for (let i = 100; i <= 999; i++) {
  for (let j = 100; j <= 999; j++) {
    multiplicationContainer = i * j;
    if (multiplicationContainer.toString().length % 2 === 0) {
      // console.log(`i * j = ${multiplicationContainer.toString()}`);
      let resultArray = multiplicationContainer.toString().split('');
      // console.log(resultArray);
      if (
        resultArray[0] === resultArray[resultArray.length - 1] && // first elem === last elem
        resultArray[1] === resultArray[resultArray.length - 2] && // first elem === pre last elem
        resultArray[2] === resultArray[resultArray.length - 3]    // third elem === pre pre last elem)
      ) {
        palindromeContainer = resultArray;
        // console.log(resultArray);
      }
    }
  }
}

result = Number(palindromeContainer.join(''));

console.log(result);
