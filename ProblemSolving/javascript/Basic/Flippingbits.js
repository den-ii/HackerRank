function Flippingbits(n) {
  //Write your code here
  let bits = n.toString(2);
  const howmany = 32 - bits.length;
  bits = "0".repeat(howmany) + bits;
  console.log(bits);
  let flippedBits = bits
    .split("")
    .reverse()
    .map((x, index) => {
      if (x === "0") {
        return 1 * 2 ** index;
      }
      return 0;
    })
    .reverse()
    .reduce((acc, value) => acc + value, 0);
  return flippedBits;
}

// Flippingbits(9);
