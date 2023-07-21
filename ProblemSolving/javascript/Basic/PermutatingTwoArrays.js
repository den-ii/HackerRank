function twoArrays(k, A, B) {
  // Write your code here
  let truthy;
  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => b - a);

  truthy = A.map((x, index) => {
    if (x + B[index] >= k) {
      return true;
    }
    return false;
  });
  if (truthy.filter((x) => x == false).length) {
    return "NO";
  }
  return "YES";
}
console.log(twoArrays(1, [0, 1], [0, 2]));
