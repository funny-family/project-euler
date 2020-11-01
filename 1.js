// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

const length = 1000;
const container = [];
let result = null;

for (var i = 1; i < length; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    container.push(i);
  }
}

result = container.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(result);