process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
  input += chunk;
});
process.stdin.on("end", function () {
  // now we can read/parse input
  input = inputString.split("\n");
  console.log(input[0] ^ input[1]);
});
//UNABLE TO SOLVE PROBLEM
