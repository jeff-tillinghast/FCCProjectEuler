// https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-3-largest-prime-factor
// Problem 3: Largest prime factor
// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the given number?

function largestPrimeFactor(number) {
  var temp = number, prime = 2;
  for (let i = 0; i < number; i++){
    console.log(temp, prime);
    if (temp / prime == 1) {
      return temp;
    } else if (temp % prime == 0) {
    temp = temp / prime;
    } else {
      prime++;
   };
  }
}

largestPrimeFactor(5);
