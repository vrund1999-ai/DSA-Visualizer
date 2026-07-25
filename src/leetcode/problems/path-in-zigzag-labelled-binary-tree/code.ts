export const CODE = [
  "function pathInZigZagTree(label) {", //                    0
  "  const path = [];", //                                    1
  "  let level = Math.floor(Math.log2(label));", //           2
  "  while (label >= 1) {", //                                3
  "    path.unshift(label);", //                              4
  "    // mirror within the level, then go to parent", //     5
  "    const lo = 2 ** level, hi = 2 ** (level+1) - 1;", //   6
  "    label = Math.floor((lo + hi - label) / 2);", //        7
  "    level--;", //                                          8
  "  }", //                                                   9
  "  return path;", //                                       10
  "}", //                                                    11
];
