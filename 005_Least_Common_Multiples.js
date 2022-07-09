// https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-5-smallest-multiple
// Problem 5: Smallest multiple
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// 
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a%b); // Euclidean algorithm
}

function lcm(a, b) {
  return a * b / gcd (a,b); // Euclid pt. 2
}

function smallestMult(a) {
  var result = 1;
  for (let i = 2; i <= a ; i++) {
    result = lcm(result, i);
  }
  return result;
};

smallestMult(9);
