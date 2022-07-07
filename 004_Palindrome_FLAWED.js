function largestPalindromeProduct(n) {
  var a = (Math.pow(10, n)-1), b = a, prod = a * b, counter = 0;
  console.log(a, b, prod);
  
  let typeCast = num => Number (num);
  var arr = Array.from(String(prod), typeCast);
  console.log(arr);

  //palindrome checker
  for (let i = 0; i < prod; i++) {
    if (arr[counter] == arr[arr.length-(counter+1)]) {
      counter++;
     } else {
      b--;
      [b, a] = [a, b]
      prod = a * b
      arr = Array.from(String(prod), typeCast);
      console.log(a, b, prod, arr)
    }
  }
}

largestPalindromeProduct(2);
