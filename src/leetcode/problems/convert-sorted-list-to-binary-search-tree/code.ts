export const CODE = [
  "function sortedListToBST(values) {", //                    0
  "  const build = (lo, hi) => {", //                         1
  "    if (lo > hi) return null;", //                         2
  "    const mid = (lo + hi) >> 1;   // middle = subtree root",//3
  "    const node = new TreeNode(values[mid]);", //           4
  "    node.left = build(lo, mid - 1);", //                   5
  "    node.right = build(mid + 1, hi);", //                  6
  "    return node;", //                                      7
  "  };", //                                                  8
  "  return build(0, values.length - 1);", //                 9
  "}", //                                                    10
];
