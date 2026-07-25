export const CODE = [
  "function isUgly(n) {", //                                  0
  "  if (n <= 0) return false;", //                           1
  "  for (const f of [2, 3, 5]) {", //                        2
  "    while (n % f === 0) n /= f;   // strip factor", //     3
  "  }", //                                                   4
  "  return n === 1;   // only 2/3/5 factors", //             5
  "}", //                                                     6
];
