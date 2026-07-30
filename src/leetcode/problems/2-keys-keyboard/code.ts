export const CODE = [
  "function minSteps(n) {", //                                0
  "  let ops = 0;", //                                        1
  "  for (let d = 2; n > 1; d++) {", //                       2
  "    while (n % d === 0) {   // factor out d", //           3
  "      ops += d;   // copy once, paste d-1 times", //       4
  "      n /= d;", //                                         5
  "    }", //                                                 6
  "  }", //                                                   7
  "  return ops;   // sum of prime factors", //               8
  "}", //                                                     9
];
