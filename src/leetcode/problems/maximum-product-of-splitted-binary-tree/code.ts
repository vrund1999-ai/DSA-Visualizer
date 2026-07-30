export const CODE = [
  "function maxProduct(root) {", //                           0
  "  const MOD = 1e9 + 7;", //                                1
  "  const sums = [];", //                                    2
  "  const total = subtreeSum(root, sums);", //               3
  "  let best = 0;", //                                       4
  "  for (const s of sums)   // s = one part's sum", //       5
  "    best = Math.max(best, s * (total - s));", //           6
  "  return best % MOD;", //                                  7
  "}", //                                                     8
  "", //                                                      9
  "function subtreeSum(node, sums) {", //                    10
  "  if (!node) return 0;", //                               11
  "  const s = node.val + subtreeSum(node.left, sums)", //   12
  "               + subtreeSum(node.right, sums);", //       13
  "  sums.push(s);", //                                      14
  "  return s;", //                                          15
  "}", //                                                    16
];
