function findMedian(arr) {
  const medianArray = arr.sort((a, b) => a - b);
  const medianIndex = Math.floor(medianArray.length / 2);
  return medianArray[medianIndex];
}

console.log(findMedian([0, 1, 2, 4, 6, 5, 3]));
