function flippingMatrix(matrix) {
  // Write your code here
  let matrixLength = matrix.length;
  let quadrant = Math.round(matrix.length / 2);

  function quadrantCheck() {
    let leftQuad = [];
    let rightQuad = [];
    let leftDownQuad = [];
    let rightDownQuad = [];
    matrix.forEach((x, i) => {
      x.forEach((j, l) => {
        if (l < quadrant && i < quadrant) leftQuad.push(j);
      });
    });
    //rightQuad
    matrix.forEach((x, i) => {
      x.forEach((j, l) => {
        if (l >= quadrant && i < quadrant) rightQuad.push(j);
      });
    });

    //leftDownQuad
    matrix.forEach((x, i) => {
      x.forEach((j, l) => {
        if (l < quadrant && i >= quadrant) leftDownQuad.push(j);
      });
    });
    matrix.forEach((x, i) => {
      x.forEach((j, l) => {
        if (l >= quadrant && i >= quadrant) rightDownQuad.push(j);
      });
    });
  }
}

//even matrix
//make sure upper-left quad is max
// we have to know all quad sum
//if upper-left is not max
//reverse first row and column
