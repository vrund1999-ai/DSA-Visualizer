export const CODE = [
  "function countPrimes(n) {", //                              0
  "  const isPrime = new Array(n).fill(true);", //            1
  "  let count = 0;", //                                      2
  "  for (let p = 2; p < n; p++) {", //                       3
  "    if (!isPrime[p]) continue;", //                        4
  "    count++;", //                                          5
  "    for (let m = p * p; m < n; m += p)", //                6
  "      isPrime[m] = false;   // sieve multiples", //        7
  "  }", //                                                   8
  "  return count;", //                                       9
  "}", //                                                     10
];
