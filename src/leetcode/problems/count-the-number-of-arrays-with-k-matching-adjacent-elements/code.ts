export const CODE = [
  "function countGoodArrays(n, m, k) {", //                   0
  "  const MOD = 1e9 + 7;", //                                1
  "  // choose which k of the n-1 gaps match", //             2
  "  const choose = C(n - 1, k);", //                         3
  "  // first element: m choices", //                         4
  "  const first = m;", //                                    5
  "  // each of the other n-1-k gaps must differ", //         6
  "  const diffs = power(m - 1, n - 1 - k);", //              7
  "  return choose * first % MOD * diffs % MOD;", //          8
  "}", //                                                     9
];
