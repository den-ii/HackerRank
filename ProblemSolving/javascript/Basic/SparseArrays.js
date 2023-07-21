function matchingStrings(strings, queries) {
  // Write your code here
  const instances = queries.map((query) => {
    const instance = strings.filter((string) => string === query);
    return instance.length;
  });

  return instances;
}

// matchingStrings(["ab", "ab", "abc"], ["ab", "abc", "bc"]);
