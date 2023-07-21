function pangrams(s) {
  // Write your code here
  const alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  s = s.split(" ").join("").split("");
  for (let alphabet of alphabets) {
    const ans = s.find((x) => x.toLowerCase() === alphabet);
    if (!ans) {
      return "not panagram";
    }
  }
  return "panagram";
}
// console.log(pangrams("We promptly judged antique ivory buckles for the prize"));
