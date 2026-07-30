export const CODE = [
  "function concatenatedBinary(n) {", //                      0
  "  const MOD = 1e9 + 7;", //                                1
  "  let result = 0;", //                                     2
  "  for (let i = 1; i <= n; i++) {", //                      3
  "    const len = i.toString(2).length;   // bits of i", //  4
  "    // shift result left by len, then add i", //           5
  "    result = ((result * 2 ** len) + i) % MOD;", //         6
  "  }", //                                                   7
  "  return result;", //                                      8
  "}", //                                                     9
];
