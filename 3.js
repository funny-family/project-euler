// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

const mainNumber = 600851475143;

let result = null;

function isPrimeNumber(number) {
  if (number < 2) return;

  let startNumber = 2;

  while (number % startNumber !== 0) {
    startNumber += 1;
  }

  return startNumber === number;
}

for (let i = 2; i < 100000; i++) {
  if (isPrimeNumber(i)) {
    if (mainNumber % i === 0) {
      result = i;
    }
  }
}

console.log(result);
