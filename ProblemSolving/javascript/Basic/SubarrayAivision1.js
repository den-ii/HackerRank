function birthday(s, d, m) {
  // Write your code here
  let share = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i + m - 1]) {
      let segment = 0;
      for (let j = 0; j < m; j++) {
        segment += s[i + j];
      }
      if (segment === d) {
        share++;
      }
    }
  }
  return share;
}
// console.log(
//   birthday([2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1], 18, 7)
// );
