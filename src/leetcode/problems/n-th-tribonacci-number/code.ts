export const CODE = [
  "function tribonacci(n) {", //                              0
  "  if (n === 0) return 0;", //                              1
  "  if (n <= 2) return 1;", //                               2
  "  let a = 0, b = 1, c = 1;   // T0, T1, T2", //            3
  "  for (let i = 3; i <= n; i++) {", //                      4
  "    const next = a + b + c;", //                           5
  "    a = b; b = c; c = next;   // slide window", //         6
  "  }", //                                                   7
  "  return c;", //                                           8
  "}", //                                                     9
];
