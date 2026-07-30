export const CODE = [
  "function sumOfLeftLeaves(root) {", //                      0
  "  let sum = 0;", //                                        1
  "  function dfs(node, isLeft) {", //                        2
  "    if (!node) return;", //                                3
  "    if (!node.left && !node.right) {   // a leaf", //      4
  "      if (isLeft) sum += node.val;", //                    5
  "      return;", //                                         6
  "    }", //                                                 7
  "    dfs(node.left, true);", //                             8
  "    dfs(node.right, false);", //                           9
  "  }", //                                                  10
  "  dfs(root, false);", //                                  11
  "  return sum;", //                                        12
  "}", //                                                    13
];
