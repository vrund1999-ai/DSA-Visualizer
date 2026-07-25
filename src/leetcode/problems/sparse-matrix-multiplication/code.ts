export const CODE = [
  "function multiply(A, B) {", //                             0
  "  const m = A.length, k = A[0].length, n = B[0].length;",// 1
  "  const C = grid(m, n, 0);", //                            2
  "  for (let i = 0; i < m; i++) {", //                       3
  "    for (let p = 0; p < k; p++) {", //                     4
  "      if (A[i][p] === 0) continue;   // skip zeros", //    5
  "      for (let j = 0; j < n; j++) {", //                   6
  "        C[i][j] += A[i][p] * B[p][j];", //                 7
  "      }", //                                               8
  "    }", //                                                 9
  "  }", //                                                  10
  "  return C;", //                                          11
  "}", //                                                    12
];
