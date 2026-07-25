export const CODE = [
  "function countGoodNumbers(n) {", //                        0
  "  const MOD = 1000000007n;", //                            1
  "  // even indices: 5 even digits; odd: 4 primes", //      2
  "  const evens = (n + 1n) / 2n, odds = n / 2n;", //        3
  "  return power(5n, evens) * power(4n, odds) % MOD;", //    4
  "}", //                                                     5
  "function power(base, exp) {", //                           6
  "  let r = 1n;", //                                         7
  "  base %= MOD;", //                                        8
  "  while (exp > 0n) {", //                                  9
  "    if (exp & 1n) r = r * base % MOD;   // odd bit", //   10
  "    base = base * base % MOD;   // square", //            11
  "    exp >>= 1n;", //                                      12
  "  }", //                                                  13
  "  return r;", //                                          14
  "}", //                                                    15
];
