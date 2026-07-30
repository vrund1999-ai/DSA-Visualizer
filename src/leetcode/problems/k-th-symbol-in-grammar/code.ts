export const CODE = [
  "function kthGrammar(n, k) {", //                           0
  "  // row 1 is '0'; each 0 -> 01, each 1 -> 10", //         1
  "  // symbol k derives from symbol ceil(k/2) above", //     2
  "  if (n === 1) return 0;", //                              3
  "  const parent = kthGrammar(n - 1, Math.ceil(k / 2));", // 4
  "  if (k % 2 === 1)", //                                    5
  "    return parent;   // first child = same", //            6
  "  else", //                                                7
  "    return parent ^ 1;   // second child = flipped", //    8
  "}", //                                                     9
];
