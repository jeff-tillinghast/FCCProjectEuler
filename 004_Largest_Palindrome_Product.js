// https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-4-largest-palindrome-product
//
// Problem 4: Largest palindrome product
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two n-digit numbers.

function largestPalindromeProduct(n) {
  let min = +(Math.pow(10, n-1));
  let max = +(Math.pow(10, n)-1);
  let largest = 0;

  //outer loop countdown test all values of 1st factor;
  for (let i = max; i >=min; i--) {
  //inner loop countdown test all values of 2nd factor;
    for (let j = max; j >= min; j--){
      let prod = i * j;
      
      //palindrome checker
      let prodReverse = [...String(prod)].reverse().join("")      
      if (prod == prodReverse) {
        largest = Math.max(prod, largest);
        break;
      }
    }
  }
  return largest;
}
largestPalindromeProduct(2);
