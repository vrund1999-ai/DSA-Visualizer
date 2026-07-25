export const CODE = [
  "function maxPower(s) {", //                                0
  "  let best = 1, run = 1;", //                              1
  "  for (let i = 1; i < s.length; i++) {", //               2
  "    if (s[i] === s[i - 1]) run++;   // extend run", //     3
  "    else run = 1;                   // reset", //          4
  "    best = Math.max(best, run);", //                       5
  "  }", //                                                   6
  "  return best;", //                                        7
  "}", //                                                     8
];
