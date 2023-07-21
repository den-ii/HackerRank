function miniMaxSum(arr) {
  // Write your code here
  let sum = 0;

  arr.sort((a, b) => a - b);
  sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  console.log(sum - arr[arr.length - 1], sum - arr[0]);
}
