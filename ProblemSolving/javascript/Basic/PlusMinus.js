function plusMinus(arr) {
  // Write your code here
  const positive = arr.filter((x) => x > 0);
  const negative = arr.filter((x) => x < 0);
  const zero = arr.filter((x) => x === 0);
  const length = arr.length;

  console.log(positive.length / length);
  console.log(negative.length / length);
  console.log(zero.length / length);
}
