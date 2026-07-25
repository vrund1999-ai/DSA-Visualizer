export const CODE = [
  "function checkIfExist(arr) {", //                          0
  "  const seen = new Set();", //                             1
  "  for (const n of arr) {", //                             2
  "    if (seen.has(2 * n) ||", //                            3
  "        (n % 2 === 0 && seen.has(n / 2)))", //             4
  "      return true;   // found N and 2N", //                5
  "    seen.add(n);", //                                      6
  "  }", //                                                   7
  "  return false;", //                                       8
  "}", //                                                     9
];
