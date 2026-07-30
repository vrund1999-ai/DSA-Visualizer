export const CODE = [
  "function checkPowersOfThree(n) {", //                      0
  "  while (n > 0) {", //                                     1
  "    if (n % 3 === 2) return false;   // digit 2", //       2
  "    n = Math.floor(n / 3);   // next base-3 digit", //     3
  "  }", //                                                   4
  "  return true;   // all digits 0 or 1", //                 5
  "}", //                                                     6
];
