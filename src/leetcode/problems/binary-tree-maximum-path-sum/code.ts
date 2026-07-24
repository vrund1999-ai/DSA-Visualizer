export const CODE = [
  "function maxPathSum(root) {", //                           0
  "  let best = -Infinity;", //                               1
  "  function gain(node) {", //                              2
  "    if (!node) return 0;", //                              3
  "    const l = Math.max(gain(node.left),  0);", //          4
  "    const r = Math.max(gain(node.right), 0);", //          5
  "    // path through node using both children", //         6
  "    best = Math.max(best, node.val + l + r);", //          7
  "    return node.val + Math.max(l, r);  // one branch", //  8
  "  }", //                                                   9
  "  gain(root);", //                                        10
  "  return best;", //                                        11
  "}", //                                                    12
];
