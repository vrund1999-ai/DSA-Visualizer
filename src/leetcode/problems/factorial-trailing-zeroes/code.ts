export const CODE = [
  "function trailingZeroes(n) {", //                          0
  "  let count = 0;", //                                      1
  "  // each trailing 0 comes from a factor 10 = 2·5;", //   2
  "  // 5s are scarcer, so count factors of 5", //           3
  "  for (let p = 5; p <= n; p *= 5) {", //                   4
  "    count += Math.floor(n / p);", //                       5
  "  }", //                                                   6
  "  return count;", //                                       7
  "}", //                                                     8
];
