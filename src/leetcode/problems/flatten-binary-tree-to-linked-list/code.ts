export const CODE = [
  "function flatten(root) {", //                              0
  "  let prev = null;", //                                    1
  "  // reverse preorder: right, left, node", //             2
  "  (function dfs(node) {", //                               3
  "    if (!node) return;", //                                4
  "    dfs(node.right);", //                                  5
  "    dfs(node.left);", //                                   6
  "    node.right = prev;   // link into the list", //        7
  "    node.left = null;", //                                 8
  "    prev = node;", //                                      9
  "  })(root);", //                                          10
  "}", //                                                    11
];
