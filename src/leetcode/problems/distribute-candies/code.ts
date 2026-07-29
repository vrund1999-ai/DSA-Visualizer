export const CODE = [
  "function distributeCandies(candyType) {", //               0
  "  const types = new Set(candyType);", //                   1
  "  const limit = candyType.length / 2;", //                 2
  "  // eat at most n/2, one of each unique type", //         3
  "  return Math.min(types.size, limit);", //                 4
  "}", //                                                     5
];
