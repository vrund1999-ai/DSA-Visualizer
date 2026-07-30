export const CODE = [
  "function longestUnivaluePath(root) {", //                  0
  "  let best = 0;", //                                       1
  "  function arrow(node) {", //                              2
  "    if (!node) return 0;", //                              3
  "    let l = arrow(node.left);", //                         4
  "    let r = arrow(node.right);", //                        5
  "    let lp = 0, rp = 0;", //                               6
  "    if (node.left && node.left.val === node.val) lp = l + 1;", //7
  "    if (node.right && node.right.val === node.val) rp = r + 1;", //8
  "    best = Math.max(best, lp + rp);   // through node", // 9
  "    return Math.max(lp, rp);   // extend upward", //      10
  "  }", //                                                  11
  "  arrow(root);", //                                       12
  "  return best;", //                                       13
  "}", //                                                    14
];
