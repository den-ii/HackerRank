function lonelyinteger(a) {
  // Write your code here
  const found = a.filter((x) => {
    const integer = a.filter((num) => num === x);
    if (integer.length < 2) {
      return true;
    }
    return false;
  });
  console.log(found[0]);
}

lonelyinteger([1, 2, 3, 4, 3, 2, 1]);
