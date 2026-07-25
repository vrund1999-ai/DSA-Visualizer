export const CODE = [
  "function findEvenNumbers(digits) {", //                    0
  "  const have = tally(digits);   // count of each 0-9", //  1
  "  const res = [];", //                                     2
  "  for (let n = 100; n <= 998; n += 2) {", //               3
  "    const need = tally(digitsOf(n));", //                  4
  "    if (need.every((c, d) => c <= have[d]))", //           5
  "      res.push(n);   // multiset fits", //                 6
  "  }", //                                                   7
  "  return res;", //                                         8
  "}", //                                                     9
];
