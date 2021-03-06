// Problem 2: Even Fibonacci Numbers
// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
//
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed n, find the sum of the even-valued terms.

function fiboEvenSum(n) {
  let arr = [1, 2]
  let evenArr = [2]
  let evenSum = 0
  for (let i = 1; i < n; i++) {
    let sum = arr[i]+arr[i-1];
    arr.push(sum);
    if (sum <= n && sum % 2 == 0) {
      evenArr.push(sum);
    }
    evenSum = evenArr.reduce((a,b)=>a+b);
  }
  return evenSum
};

fiboEvenSum(34)
