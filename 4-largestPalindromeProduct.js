function largestPalindromeProduct(n) {
  let stringStart = `9${"9".repeat(n - 1)}`;
  const start = parseInt(stringStart);
  const palindromeArr = [];
  for (let i = start; i >= 0; i--) {
    for (let j = start; j >= 0; j--) {
      const product = i * j;
      const stringProduct = `${product}`;
      if (stringProduct === [...stringProduct].reverse().join("")) {
        palindromeArr.push(product);
      }
    }
  }
  return Math.max(...palindromeArr);
}

console.log(largestPalindromeProduct(3));
