export const CODE = [
  "function reorderedPowerOf2(n) {", //                       0
  "  const sig = x => [...String(x)].sort().join('');", //    1
  "  const target = sig(n);", //                              2
  "  for (let p = 1; p <= 1e9; p *= 2) {", //                 3
  "    if (sig(p) === target)   // same digit multiset", //   4
  "      return true;", //                                    5
  "  }", //                                                   6
  "  return false;", //                                       7
  "}", //                                                     8
];
