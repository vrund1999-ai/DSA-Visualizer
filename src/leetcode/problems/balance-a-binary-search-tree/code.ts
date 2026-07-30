export const CODE = [
  "function balanceBST(root) {", //                           0
  "  const sorted = [];", //                                  1
  "  inorder(root, sorted);   // gives ascending values", //  2
  "  function build(lo, hi) {", //                            3
  "    if (lo > hi) return null;", //                         4
  "    const mid = (lo + hi) >> 1;   // middle = root", //    5
  "    const node = new TreeNode(sorted[mid]);", //           6
  "    node.left = build(lo, mid - 1);", //                   7
  "    node.right = build(mid + 1, hi);", //                  8
  "    return node;", //                                      9
  "  }", //                                                  10
  "  return build(0, sorted.length - 1);", //                11
  "}", //                                                    12
];
