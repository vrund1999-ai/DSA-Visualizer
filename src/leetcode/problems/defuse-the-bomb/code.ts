export const CODE = [
  "function decrypt(code, k) {", //                           0
  "  const n = code.length;", //                              1
  "  const res = new Array(n).fill(0);", //                   2
  "  if (k === 0) return res;   // all zeros", //             3
  "  for (let i = 0; i < n; i++) {", //                       4
  "    for (let j = 1; j <= Math.abs(k); j++) {", //          5
  "      const idx = k > 0 ? i + j : i - j;", //              6
  "      res[i] += code[(idx + n) % n];   // wrap around", // 7
  "    }", //                                                 8
  "  }", //                                                   9
  "  return res;", //                                        10
  "}", //                                                    11
];
