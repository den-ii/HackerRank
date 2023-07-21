function diagonalDifference(arr) {
  let firstDiagonal = [];
  let secondDiagonal = [];
  const firstDiagonalSolv = arr.filter((i, index1) => {
    i.filter((j, index2) => {
      if (index1 === index2) {
        firstDiagonal.push(j);
      }
    });
  });
  const secondDiagonalSolv = arr.filter((i, index1) => {
    i.reverse().filter((j, index2) => {
      if (index1 === index2) {
        secondDiagonal.push(j);
      }
    });
  });
  //   console.log(secondDiagonal);
  firstDiagonal = firstDiagonal.reduce((acc, val) => acc + val, 0);
  secondDiagonal = secondDiagonal.reduce((acc, val) => acc + val, 0);
    return Math.abs(firstDiagonal - secondDiagonal);
//   console.log(firstDiagonal, secondDiagonal);
}
diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]);
