//not very efficient i think

function largestPalindromeProduct(n) {
  let stringStart = `9${"9".repeat(n - 1)}`;
  const maxValue = parseInt(stringStart);
  const minValue = parseInt(`1${"0".repeat(n - 1)}`);
  const palindromeArr = [];
  for (let i = maxValue; i >= minValue; i--) {
    for (let j = maxValue; j >= minValue; j--) {
      const product = i * j;
      const stringProduct = `${product}`;
      if (stringProduct === [...stringProduct].reverse().join("")) {
        palindromeArr.push(product);
      }
    }
  }
  return Math.max(...palindromeArr);
}

console.log(largestPalindromeProduct(2));
